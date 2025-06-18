

USE RestaurantManagement;
GO

-- ======================================
-- 1. BẢNG LOOKUP (ENUM)
-- ======================================
CREATE TABLE OrderStatuses (
    StatusID   INT IDENTITY PRIMARY KEY,
    StatusName NVARCHAR(20) NOT NULL UNIQUE
);
INSERT INTO OrderStatuses(StatusName) VALUES
  ('Pending'),
  ('Processing'),
  ('Done'),
  ('Cancelled');

CREATE TABLE PaymentMethods (
    MethodID   INT IDENTITY PRIMARY KEY,
    MethodName NVARCHAR(20) NOT NULL UNIQUE
);
INSERT INTO PaymentMethods(MethodName) VALUES
  ('Cash'),
  ('Card'),
  ('Momo'),
  ('VNPay');

CREATE TABLE ReservationStatuses (
    StatusID   INT IDENTITY PRIMARY KEY,
    StatusName NVARCHAR(20) NOT NULL UNIQUE
);
INSERT INTO ReservationStatuses(StatusName) VALUES
  ('Pending'),
  ('Confirmed'),
  ('Cancelled');
GO

-- ======================================
-- 2. PHÂN QUYỀN ĐƠN GIẢN
-- ======================================
CREATE TABLE Roles (
    RoleID      INT    IDENTITY PRIMARY KEY,
    RoleName    NVARCHAR(50) NOT NULL UNIQUE,
    Description NVARCHAR(255)
);
CREATE TABLE Users (
    UserID       INT    IDENTITY PRIMARY KEY,
    Username     NVARCHAR(50) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(255) NOT NULL,
    FullName     NVARCHAR(100),
    Email        NVARCHAR(100),
    Phone        NVARCHAR(20),
    Status       BIT    NOT NULL DEFAULT 1,
    CreatedAt    DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
);
CREATE TABLE UserRoles (
    UserID INT NOT NULL REFERENCES Users(UserID),
    RoleID INT NOT NULL REFERENCES Roles(RoleID),
    PRIMARY KEY(UserID, RoleID)
);
GO

-- ======================================
-- 3. QUẢN LÝ BÀN & KHU VỰC
-- ======================================
CREATE TABLE Areas (
    AreaID      INT   IDENTITY PRIMARY KEY,
    AreaName    NVARCHAR(50) NOT NULL,
    Description NVARCHAR(255)
);
CREATE TABLE RestaurantTables (
    TableID    INT       IDENTITY PRIMARY KEY,
    TableName  NVARCHAR(50) NOT NULL,
    AreaID     INT       NOT NULL REFERENCES Areas(AreaID),
    TableType  NVARCHAR(50),
    Status     NVARCHAR(20) NOT NULL,
    IsWindow   BIT       NOT NULL DEFAULT 0,
    Notes      NVARCHAR(255),
    CreatedAt  DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
);
CREATE TABLE TableGroups (
    GroupID    INT       IDENTITY PRIMARY KEY,
    CreatedBy  INT       REFERENCES Users(UserID),
    CreatedAt  DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    Notes      NVARCHAR(255)
);
CREATE TABLE TableGroupMembers (
    GroupID INT NOT NULL REFERENCES TableGroups(GroupID),
    TableID INT NOT NULL REFERENCES RestaurantTables(TableID),
    PRIMARY KEY(GroupID, TableID)
);
GO

-- ======================================
-- 4. QUẢN LÝ THỰC ĐƠN & COMBO
-- ======================================
CREATE TABLE Categories (
    CategoryID   INT    IDENTITY PRIMARY KEY,
    CategoryName NVARCHAR(50) NOT NULL,
    Description  NVARCHAR(255)
);
CREATE TABLE Dishes (
    DishID      INT           IDENTITY PRIMARY KEY,
    DishName    NVARCHAR(100) NOT NULL,
    CategoryID  INT           NOT NULL REFERENCES Categories(CategoryID),
    Price       DECIMAL(10,2) NOT NULL,
    Status      BIT           NOT NULL DEFAULT 1,
    Unit        NVARCHAR(50)  NOT NULL,
    ImageUrl    NVARCHAR(255),
    CreatedAt   DATETIME2     NOT NULL DEFAULT SYSUTCDATETIME()
);
CREATE TABLE DishSchedules (
    ScheduleID INT     IDENTITY PRIMARY KEY,
    DishID     INT     NOT NULL REFERENCES Dishes(DishID),
    DayOfWeek  TINYINT NULL,       -- 1=Mon … 7=Sun
    FromTime   TIME    NOT NULL,
    ToTime     TIME    NOT NULL
);
CREATE TABLE Combos (
    ComboID     INT    IDENTITY PRIMARY KEY,
    ComboName   NVARCHAR(100) NOT NULL,
    Price       DECIMAL(10,2) NOT NULL,
    Description NVARCHAR(255)
);
CREATE TABLE ComboItems (
    ComboID INT NOT NULL REFERENCES Combos(ComboID),
    DishID  INT NOT NULL REFERENCES Dishes(DishID),
    Quantity INT NOT NULL,
    PRIMARY KEY(ComboID, DishID)
);
GO

-- ======================================
-- 5. KHÁCH HÀNG & ĐẶT BÀN
-- ======================================
CREATE TABLE Customers (
    CustomerID    INT    IDENTITY PRIMARY KEY,
    FullName      NVARCHAR(100),
    Phone         NVARCHAR(20),
    Email         NVARCHAR(100),
    LoyaltyPoints INT    NOT NULL DEFAULT 0,
    MemberSince   DATE   NOT NULL DEFAULT CAST(SYSUTCDATETIME() AS DATE)
);
CREATE TABLE Reservations (
    ReservationID  INT      IDENTITY PRIMARY KEY,
    CustomerName   NVARCHAR(255),
    Phone          NVARCHAR(20) NOT NULL,
    Email          NVARCHAR(100),
    TableID        INT      NOT NULL REFERENCES RestaurantTables(TableID),
    ReservationAt  DATETIME2 NOT NULL,
    StatusID       INT      NOT NULL REFERENCES ReservationStatuses(StatusID),
    CreatedAt      DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    Notes          NVARCHAR(255)
);
CREATE TABLE ReservationNotifications (
    NotificationID INT      IDENTITY PRIMARY KEY,
    ReservationID  INT      NOT NULL REFERENCES Reservations(ReservationID),
    SentAt         DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    Channel        NVARCHAR(20) NOT NULL,
    Status         NVARCHAR(20),
    Notes          NVARCHAR(255)
);
GO

-- ======================================
-- 6. ĐẶT MÓN & XỬ LÝ ĐƠN HÀNG
-- ======================================
CREATE TABLE Orders (
    OrderID       INT       IDENTITY PRIMARY KEY,
    OrderType     NVARCHAR(20) NOT NULL,
    CustomerName  NVARCHAR(200) NULL,
    Phone         NVARCHAR(20)  NULL,
    SubTotal      DECIMAL(10,2) NOT NULL,
    DiscountAmount DECIMAL(10,2) NOT NULL DEFAULT 0,
    FinalTotal    DECIMAL(10,2) NOT NULL,
    TableID       INT       NULL REFERENCES RestaurantTables(TableID),
    CreatedAt     DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    StatusID      INT       NOT NULL REFERENCES OrderStatuses(StatusID),
    IsRefunded    INT       NOT NULL DEFAULT 0,
    Notes         NVARCHAR(255)
);
CREATE TABLE OrderDetails (
    OrderDetailID INT       IDENTITY PRIMARY KEY,
    OrderID       INT       NOT NULL REFERENCES Orders(OrderID),
    DishID        INT       NOT NULL REFERENCES Dishes(DishID),
    ComboID       INT       NULL REFERENCES Combos(ComboID),
    Quantity      INT       NOT NULL,
    UnitPrice     DECIMAL(10,2) NOT NULL,
    StatusID      INT       NOT NULL REFERENCES OrderStatuses(StatusID),
    IsRefunded    INT       NOT NULL DEFAULT 0,
    Notes         NVARCHAR(255)
);
CREATE TABLE KitchenTickets (
    TicketID  INT      IDENTITY PRIMARY KEY,
    OrderID   INT      NOT NULL REFERENCES Orders(OrderID),
    PrintedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    PrintedBy INT      REFERENCES Users(UserID)
);
GO

-- ======================================
-- 7. LƯU GIAO DỊCH TÍCH ĐIỂM
-- ======================================
CREATE TABLE LoyaltyTransactions (
    TransactionID INT      IDENTITY PRIMARY KEY,
    CustomerID    INT      NOT NULL REFERENCES Customers(CustomerID),
    OrderID       INT      NULL REFERENCES Orders(OrderID),
    PointsChange  INT      NOT NULL,
    TransactionAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    Reason        NVARCHAR(255)
);
GO

-- ======================================
-- 8. THANH TOÁN & HÓA ĐƠN
-- ======================================
CREATE TABLE Invoices (
    InvoiceID      INT      IDENTITY PRIMARY KEY,
    OrderID        INT      NOT NULL REFERENCES Orders(OrderID),
    SubTotal       DECIMAL(10,2) NOT NULL,
    DiscountAmount DECIMAL(10,2) NOT NULL DEFAULT 0,
    FinalTotal     DECIMAL(10,2) NOT NULL,
    IssuedBy       INT      NOT NULL REFERENCES Users(UserID),
    IssuedAt       DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME()
);
CREATE TABLE PaymentRecords (
    PaymentID INT      IDENTITY PRIMARY KEY,
    InvoiceID INT      NOT NULL REFERENCES Invoices(InvoiceID),
    MethodID  INT      NOT NULL REFERENCES PaymentMethods(MethodID),
    Amount    DECIMAL(10,2) NOT NULL,
    PaidAt    DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    Notes     NVARCHAR(255)
);
CREATE TABLE InvoicePrints (
    PrintID   INT      IDENTITY PRIMARY KEY,
    InvoiceID INT      NOT NULL REFERENCES Invoices(InvoiceID),
    PrintedAt DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    PrintedBy INT      REFERENCES Users(UserID)
);
GO

-- ======================================
-- 9. NHÂN SỰ & CA LÀM VIỆC
-- ======================================
CREATE TABLE WorkShifts (
    ShiftID       INT      IDENTITY PRIMARY KEY,
    UserID        INT      NOT NULL REFERENCES Users(UserID),
    ShiftDate     DATE     NOT NULL,
    StartTime     TIME     NOT NULL,
    EndTime       TIME     NOT NULL,
    HandoverTo    INT      NULL REFERENCES Users(UserID),
    HandoverNotes NVARCHAR(255),
    IsOverNight   INT      NULL
);
CREATE TABLE AttendanceRecords (
    AttendanceID INT      IDENTITY PRIMARY KEY,
    UserID       INT      NOT NULL REFERENCES Users(UserID),
    ClockIn      DATETIME2 NOT NULL,
    ClockOut     DATETIME2 NULL,
    Notes        NVARCHAR(255)
);
CREATE TABLE PerformanceReviews (
    ReviewID   INT      IDENTITY PRIMARY KEY,
    UserID     INT      NOT NULL REFERENCES Users(UserID),
    ReviewerID INT      NOT NULL REFERENCES Users(UserID),
    ReviewDate DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    Score      INT      NOT NULL,
    Comments   NVARCHAR(500)
);
GO

-- ======================================
-- 10. KHUYẾN MÃI & SỬ DỤNG
-- ======================================
CREATE TABLE Promotions (
    PromoID         INT      IDENTITY PRIMARY KEY,
    PromoCode       NVARCHAR(50) NOT NULL UNIQUE,
    PromoName       NVARCHAR(100),
    Description     NVARCHAR(255),
    DiscountPercent DECIMAL(5,2) NULL,
    DiscountAmount  DECIMAL(10,2) NULL,
    StartDate       DATE     NOT NULL,
    EndDate         DATE     NOT NULL,
    UsageLimit      INT      NULL,
    IsActive        BIT      NOT NULL DEFAULT 1
);
CREATE TABLE PromoUsage (
    PromoID    INT      NOT NULL REFERENCES Promotions(PromoID),
    Phone      NVARCHAR(20),
    UsedAt     DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
    PRIMARY KEY(PromoID, Phone, UsedAt)
);
GO
