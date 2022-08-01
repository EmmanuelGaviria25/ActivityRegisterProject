GRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' IDENTIFIED BY 'admin';

CREATE DATABASE activity_regiter;

CREATE TABLE `activity` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `date_time_execution` datetime DEFAULT NULL,
  `days_late` int(11) DEFAULT(0) NULL,
  `description` varchar(255) NOT NULL,
  `status` varchar(20) NOT NULL,
  `title` varchar(100) NOT NULL,
  `employee_id` bigint(20) NOT NULL
);

ALTER TABLE `activity`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKm67enjapuo2hd7irnv1k2fx7t` (`employee_id`);


CREATE TABLE `employee` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `document` varchar(255) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `phone` varchar(20) DEFAULT NULL
);

ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `activity`
  ADD CONSTRAINT `activity_employee` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`);
COMMIT;


INSERT INTO `employee` (`id`, `document`, `first_name`, `last_name`, `phone`) VALUES (NULL, '123456798', 'Empleado 1', 'Numero 1', '3130000000');
INSERT INTO `employee` (`id`, `document`, `first_name`, `last_name`, `phone`) VALUES (NULL, '987654321', 'Empleado 2', 'Numero 2', '3131111111');
