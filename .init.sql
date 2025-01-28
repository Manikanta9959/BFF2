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
(4, 'Paris', 'France');

-- Insert data into teams table
INSERT INTO teams (id, name, home_city, area_id) VALUES
(1, 'Manchester United', 'Manchester', 1),
(2, 'Manchester City', 'Manchester', 1),
(3, 'Real Madrid', 'Madrid', 2),
(4, 'Bayern Munich', 'Munich', 3),
(5, 'Paris Saint-Germain', 'Paris', 4);

-- Insert data into players table
INSERT INTO players (id, name, position, nationality, team_id) VALUES
(1, 'David de Gea', 'Goalkeeper', 'Spain', 1),
(2, 'Marcus Rashford', 'Forward', 'England', 1),
(3, 'Erling Haaland', 'Forward', 'Norway', 2),
(4, 'Kevin De Bruyne', 'Midfielder', 'Belgium', 2),
(5, 'Karim Benzema', 'Forward', 'France', 3),
(6, 'Toni Kroos', 'Midfielder', 'Germany', 3),
(7, 'Thomas Müller', 'Forward', 'Germany', 4),
(8, 'Manuel Neuer', 'Goalkeeper', 'Germany', 4),
(9, 'Kylian Mbappé', 'Forward', 'France', 5),
(10, 'Lionel Messi', 'Forward', 'Argentina', 5);

-- Insert data into matches table
INSERT INTO matches (id, home_team_id, away_team_id, competition, date, area_id) VALUES
(1, 1, 2, 'Premier League', '2025-01-28 17:00:00', 1),
(2, 3, 4, 'Champions League', '2025-02-01 20:00:00', 2),
(3, 4, 5, 'Champions League', '2025-02-15 20:00:00', 3),
(4, 5, 1, 'Friendly', '2025-03-10 19:00:00', 4);