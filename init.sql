-- Create areas table
CREATE TABLE areas (
    id INTEGER PRIMARY KEY,
    city VARCHAR(50),
    country VARCHAR(50)
);

-- Create teams table
CREATE TABLE teams (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50),
    home_city VARCHAR(50),
    area_id INTEGER,
    FOREIGN KEY (area_id) REFERENCES areas(id)
);

-- Create players table
CREATE TABLE players (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50),
    position VARCHAR(50),
    nationality VARCHAR(50),
    team_id INTEGER,
    FOREIGN KEY (team_id) REFERENCES teams(id)
);

-- Create matches table
CREATE TABLE matches (
    id INTEGER PRIMARY KEY,
    home_team_id INTEGER,
    away_team_id INTEGER,
    competition VARCHAR(50),
    date DATETIME,
    area_id INTEGER,
    FOREIGN KEY (home_team_id) REFERENCES teams(id),
    FOREIGN KEY (away_team_id) REFERENCES teams(id),
    FOREIGN KEY (area_id) REFERENCES areas(id)
);

-- Insert data into areas table
INSERT INTO areas (id, city, country) VALUES
(1, 'Manchester', 'England'),
(2, 'Madrid', 'Spain'),
(3, 'Munich', 'Germany'),
(4, 'Paris', 'France'),
(5, 'Turin', 'Italy'),
(6, 'London', 'England'),
(7, 'Barcelona', 'Spain'),
(8, 'Milan', 'Italy');

-- Insert data into teams table
INSERT INTO teams (id, name, home_city, area_id) VALUES
(1, 'Manchester United', 'Manchester', 1),
(2, 'Manchester City', 'Manchester', 1),
(3, 'Real Madrid', 'Madrid', 2),
(4, 'Bayern Munich', 'Munich', 3),
(5, 'Paris Saint-Germain', 'Paris', 4),
(6, 'Juventus', 'Turin', 5),
(7, 'Chelsea', 'London', 6),
(8, 'Arsenal', 'London', 6),
(9, 'Barcelona', 'Barcelona', 7),
(10, 'AC Milan', 'Milan', 8);

-- Insert data into players table
INSERT INTO players (id, name, position, nationality, team_id) VALUES
(1, 'David de Gea', 'Goalkeeper', 'Spain', 1),
(2, 'Marcus Rashford', 'Forward', 'England', 1),
(3, 'Bruno Fernandes', 'Midfielder', 'Portugal', 1),
(4, 'Erling Haaland', 'Forward', 'Norway', 2),
(5, 'Kevin De Bruyne', 'Midfielder', 'Belgium', 2),
(6, 'Jack Grealish', 'Winger', 'England', 2),
(7, 'Karim Benzema', 'Forward', 'France', 3),
(8, 'Toni Kroos', 'Midfielder', 'Germany', 3),
(9, 'Luka Modric', 'Midfielder', 'Croatia', 3),
(10, 'Thomas Müller', 'Forward', 'Germany', 4),
(11, 'Manuel Neuer', 'Goalkeeper', 'Germany', 4),
(12, 'Joshua Kimmich', 'Midfielder', 'Germany', 4),
(13, 'Kylian Mbappé', 'Forward', 'France', 5),
(14, 'Lionel Messi', 'Forward', 'Argentina', 5),
(15, 'Neymar Jr', 'Forward', 'Brazil', 5),
(16, 'Dusan Vlahovic', 'Forward', 'Serbia', 6),
(17, 'Angel Di Maria', 'Midfielder', 'Argentina', 6),
(18, 'Mason Mount', 'Midfielder', 'England', 7),
(19, 'Raheem Sterling', 'Forward', 'England', 7),
(20, 'Bukayo Saka', 'Winger', 'England', 8),
(21, 'Martin Ødegaard', 'Midfielder', 'Norway', 8),
(22, 'Robert Lewandowski', 'Forward', 'Poland', 9),
(23, 'Pedri', 'Midfielder', 'Spain', 9),
(24, 'Olivier Giroud', 'Forward', 'France', 10),
(25, 'Theo Hernandez', 'Defender', 'France', 10);

-- Insert data into matches table
INSERT INTO matches (id, home_team_id, away_team_id, competition, date, area_id) VALUES
(1, 1, 2, 'Premier League', '2025-01-28 17:00:00', 1),
(2, 3, 4, 'Champions League', '2025-02-01 20:00:00', 2),
(3, 4, 5, 'Champions League', '2025-02-15 20:00:00', 3),
(4, 5, 1, 'Friendly', '2025-03-10 19:00:00', 4),
(5, 6, 7, 'Serie A', '2025-03-20 18:30:00', 5),
(6, 8, 9, 'La Liga', '2025-04-05 21:00:00', 6),
(7, 9, 10, 'Champions League', '2025-04-15 19:45:00', 7),
(8, 7, 8, 'Premier League', '2025-04-25 17:00:00', 6);