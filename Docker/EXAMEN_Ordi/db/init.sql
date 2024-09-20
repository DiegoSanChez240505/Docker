CREATE DATABASE IF NOT EXISTS floreria;
USE floreria;

CREATE TABLE IF NOT EXISTS flowers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    count INT NOT NULL
);

-- Insertar algunas flores de ejemplo
INSERT INTO flowers (name, count) VALUES ('Rosa', 10);
INSERT INTO flowers (name, count) VALUES ('Tulipán', 20);
