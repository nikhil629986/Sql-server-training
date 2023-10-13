create database collab;
Create Schema Jira;

create table Jira.Organisation(
 Org_Id INT IDENTITY(1,1) Primary Key,
 Org_Name Varchar(50),
 Description Text
);
Create Table Jira.User_Info(
UserId INT IDENTITY(1,1) Primary Key,
First_Name Varchar(50),
Last_Name Varchar(50),
Email Varchar(100),
Username Varchar(50),
Password Varchar(255),
Org_Id Int,
Foreign Key(Org_Id)REFERENCES Jira.Organisation(Org_Id)
);


Create Table Jira.Project(
Project_ID INT IDENTITY(1,1) Primary Key ,
Project_Name VARCHAR(100),
Description Text,
Start_Date Date,
End_Date DATE,
Org_Id Int,
Foreign Key(Org_Id)REFERENCES Jira.Organisation(Org_Id)
);

Create Table Jira.Issue(
Issue_ID INT IDENTITY(1,1) Primary Key,
Issue_Type Varchar(50),
Summary Varchar(200),
Description Text,
Priority Varchar(20),
Status Varchar(20),
Due_Date Date,
Project_ID INT,
Creator_UserID INT,
Assigned_To_User_ID INT,
Foreign Key(Project_ID)REFERENCES Jira.Project(Project_ID),
Foreign Key(Creator_UserID)REFERENCES Jira.User_Info(UserId),
Foreign Key(Assigned_To_User_ID)REFERENCES Jira.User_Info(UserId),
);

Create Table Jira.Comment(
Comment_ID INT IDENTITY(1,1) Primary Key,
Text TEXT,
Date DATETIME,
Issue_ID INT,
UserID INT,
Foreign Key(Issue_ID)REFERENCES Jira.Issue(Issue_ID),
Foreign Key(UserID)REFERENCES Jira.User_Info(UserId)
);
Create Table Jira.Attachment(
Attachment_Id INT IDENTITY(1,1) Primary Key,
FileName Varchar(100),
FileSize INT,
UploadDate DATETIME,
Issue_ID INT,
UserID INT,
Foreign Key(Issue_ID)REFERENCES Jira.Issue(Issue_ID),
Foreign Key(UserID)REFERENCES Jira.User_Info(UserId)
)

Create TABLE Jira.Sprint(
Sprint_ID INT IDENTITY(1,1) Primary Key,
SprintName Varchar(100),
StartDate Date,
EndDate DATE,
)

Create Table Jira.Worklog(
Worklog_ID INT IDENTITY(1,1) Primary Key,
WorksDate Date,
HoursLogged Decimal(5,2),
Comment Text,
Issue_ID INT,
UserID INT,
Foreign Key(Issue_ID)REFERENCES Jira.Issue(Issue_ID),
Foreign Key(UserID)REFERENCES Jira.User_Info(UserId)
);

Create Table Jira.Notification(
Notification_ID INT IDENTITY(1,1) Primary Key,
NotificationType Varchar(50),
Message Text,
Isread BIT,
Issue_ID INT,
UserID INT,
Foreign Key(Issue_ID)REFERENCES Jira.Issue(Issue_ID),
Foreign Key(UserID)REFERENCES Jira.User_Info(UserId)
)

Create Table Jira.WorkFlow(
WorkFlow_Id INT IDENTITY(1,1) Primary Key,
Workflow_Name Varchar(100),
Description Text
);
Create Table Jira.WorkFlow_CheckPoint(
WorkFlow_CheckPoint_ID INT IDENTITY(1,1) Primary Key,
CheckPoint_Name Varchar(50),
WorkFlow_Id INT,
Foreign Key(WorkFlow_Id)REFERENCES Jira.WorkFlow(WorkFlow_Id)
);











