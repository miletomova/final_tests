-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 
-- Версия на сървъра: 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bar`
--

-- --------------------------------------------------------

--
-- Структура на таблица `cocktail`
--

CREATE TABLE `cocktail` (
  `cocktail_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `price` varchar(11) NOT NULL,
  `date_deleted` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Схема на данните от таблица `cocktail`
--

INSERT INTO `cocktail` (`cocktail_id`, `name`, `price`, `date_deleted`) VALUES
(1, 'Black Jack', '10,99', NULL);

-- --------------------------------------------------------

--
-- Структура на таблица `cocktail_info`
--

CREATE TABLE `cocktail_info` (
  `cocktail_info_id` int(11) NOT NULL,
  `name` int(11) NOT NULL,
  `ing1` int(11) NOT NULL,
  `ing2` int(11) NOT NULL,
  `ing3` int(11) NOT NULL,
  `date_deleted` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Схема на данните от таблица `cocktail_info`
--

INSERT INTO `cocktail_info` (`cocktail_info_id`, `name`, `ing1`, `ing2`, `ing3`, `date_deleted`) VALUES
(1, 1, 1, 2, 3, NULL);

-- --------------------------------------------------------

--
-- Структура на таблица `drinks`
--

CREATE TABLE `drinks` (
  `drinks_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `type` text NOT NULL,
  `price` varchar(11) NOT NULL,
  `date_deletet` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Схема на данните от таблица `drinks`
--

INSERT INTO `drinks` (`drinks_id`, `name`, `type`, `price`, `date_deletet`) VALUES
(1, 'Coca Cola', 'Non Alcoholic', '1,25', NULL),
(2, 'Vodka', 'Alcoholic', '2,50', NULL),
(3, 'Rom', 'Alcoholic', '2,20', NULL);

-- --------------------------------------------------------

--
-- Структура на таблица `drinks_info`
--

CREATE TABLE `drinks_info` (
  `drinks_info_id` int(11) NOT NULL,
  `drink` int(11) NOT NULL,
  `ml` varchar(11) NOT NULL,
  `expire_date` varchar(11) NOT NULL,
  `date_deleted` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Схема на данните от таблица `drinks_info`
--

INSERT INTO `drinks_info` (`drinks_info_id`, `drink`, `ml`, `expire_date`, `date_deleted`) VALUES
(1, 1, '750', '28.12.2017', NULL),
(2, 2, '50', '22.11.2018', NULL),
(3, 3, '50', '10.10.2020', NULL);

-- --------------------------------------------------------

--
-- Структура на таблица `ingredient`
--

CREATE TABLE `ingredient` (
  `ingredient_id` int(11) NOT NULL,
  `ingredient` int(11) NOT NULL,
  `ml` varchar(11) NOT NULL,
  `date_deleted` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Схема на данните от таблица `ingredient`
--

INSERT INTO `ingredient` (`ingredient_id`, `ingredient`, `ml`, `date_deleted`) VALUES
(1, 1, '40', NULL),
(2, 2, '25', NULL),
(3, 3, '60', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cocktail`
--
ALTER TABLE `cocktail`
  ADD PRIMARY KEY (`cocktail_id`);

--
-- Indexes for table `cocktail_info`
--
ALTER TABLE `cocktail_info`
  ADD PRIMARY KEY (`cocktail_info_id`);

--
-- Indexes for table `drinks`
--
ALTER TABLE `drinks`
  ADD PRIMARY KEY (`drinks_id`);

--
-- Indexes for table `drinks_info`
--
ALTER TABLE `drinks_info`
  ADD PRIMARY KEY (`drinks_info_id`);

--
-- Indexes for table `ingredient`
--
ALTER TABLE `ingredient`
  ADD PRIMARY KEY (`ingredient_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cocktail`
--
ALTER TABLE `cocktail`
  MODIFY `cocktail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `cocktail_info`
--
ALTER TABLE `cocktail_info`
  MODIFY `cocktail_info_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `drinks`
--
ALTER TABLE `drinks`
  MODIFY `drinks_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `drinks_info`
--
ALTER TABLE `drinks_info`
  MODIFY `drinks_info_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `ingredient`
--
ALTER TABLE `ingredient`
  MODIFY `ingredient_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
