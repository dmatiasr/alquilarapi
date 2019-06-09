DROP TABLE IF EXISTS;
CREATE TABLE property(
    key INTEGER PRIMARY KEY NOT NULL,
    name VARCHAR(300) UNIQUE,
    type VARCHAR(50),
    description VARCHAR(3000),
    lat VARCHAR(100),
    lon VARCHAR(100),
    location_gis geometry(Point,4326)
);