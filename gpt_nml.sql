-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 10, 2021 at 03:23 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gpt_nml`
--

-- --------------------------------------------------------

--
-- Table structure for table `driver`
--

CREATE TABLE `driver` (
  `driver_no` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `driver_name` varchar(255) DEFAULT NULL,
  `driver_lname` varchar(255) DEFAULT NULL,
  `img_driver` varchar(255) NOT NULL,
  `license_plate` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `driver`
--

INSERT INTO `driver` (`driver_no`, `number`, `driver_name`, `driver_lname`, `img_driver`, `license_plate`, `tel`) VALUES
('D1', 1, 'วศิน', 'อ่องมี', 'img/driver_1.jpg', '1ขช 5555', '092-555-1424'),
('D2', 2, 'ณรงค์', 'รักเมือง', '/img/driver_2.jpg\r\n', '2รร 9999', '090-425-5541'),
('D3', 3, 'วาสนา', 'อ่องสุข', '/img/driver_3.jpg', '3กก 5589', '089-048-5555');

-- --------------------------------------------------------

--
-- Table structure for table `gender`
--

CREATE TABLE `gender` (
  `gender_no` varchar(255) NOT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gender`
--

INSERT INTO `gender` (`gender_no`, `gender`, `title`) VALUES
('G1', 'ชาย', 'ด.ช.'),
('G2', 'หญิง', 'ด.ญ.');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `idstudent` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `image`, `idstudent`) VALUES
(1, 'profile.jpg', 7860);

-- --------------------------------------------------------

--
-- Table structure for table `log`
--

CREATE TABLE `log` (
  `idstudent` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `status_school` varchar(100) NOT NULL,
  `status_van` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `idstudent` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `username`, `password`, `idstudent`) VALUES
(1, 'firstxre', '81dc9bdb52d04dc20036dbd8313ed055', 7860);

-- --------------------------------------------------------

--
-- Table structure for table `main`
--

CREATE TABLE `main` (
  `id` int(255) NOT NULL,
  `idstudent` int(255) NOT NULL,
  `gender_no` varchar(100) NOT NULL,
  `room_no` varchar(255) NOT NULL,
  `1st_round` varchar(255) DEFAULT NULL,
  `2nd_round` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `main`
--

INSERT INTO `main` (`id`, `idstudent`, `gender_no`, `room_no`, `1st_round`, `2nd_round`) VALUES
(1, 7860, 'G1', 'R11', 'D3', 'D2');

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE `request` (
  `id` int(11) NOT NULL,
  `idstudent` int(11) DEFAULT NULL,
  `room_no` int(11) DEFAULT NULL,
  `section` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`id`, `idstudent`, `room_no`, `section`, `username`, `time`) VALUES
(1, 7860, 1, '', NULL, '2021-06-29 05:52:41'),
(2, 7860, 1, '', NULL, '2021-06-29 05:54:41'),
(3, 7860, 1, '', 'กิตติภพพิเศษชีพ', '2021-06-29 05:55:09'),
(4, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-06-29 05:55:35'),
(5, 7860, 1, 'moreing', 'กิตติภพ พิเศษชีพ', '2021-06-29 05:56:49'),
(6, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-06-29 05:58:02'),
(7, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-06-29 05:58:40'),
(8, 7860, 1, 'leave', 'กิตติภพ พิเศษชีพ', '2021-06-29 05:59:06'),
(9, 7860, 1, 'leave', 'กิตติภพ พิเศษชีพ', '2021-06-29 05:59:33'),
(10, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-06-29 06:00:40'),
(11, 7860, 1, 'morning', 'กิตติภพ พิเศษชีพ', '2021-06-29 06:00:46'),
(12, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:27:59'),
(13, 7860, 1, 'morning', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:28:00'),
(14, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:29:18'),
(15, 7860, 1, 'morning', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:29:19'),
(16, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:29:27'),
(17, 7860, 1, 'morning', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:29:29'),
(18, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:30:28'),
(19, 7860, 1, 'morning', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:30:28'),
(20, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:30:38'),
(21, 7860, 1, 'morning', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:30:40'),
(22, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:32:38'),
(23, 7860, 1, 'morning', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:32:40'),
(24, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:34:38'),
(25, 7860, 1, 'morning', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:34:41'),
(26, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:36:38'),
(27, 7860, 1, 'morning', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:36:41'),
(28, 7860, 1, 'req.body.section', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:39:13'),
(29, 7860, 1, 'req.body.section', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:41:06'),
(30, 7860, 1, 'req.body.section', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:41:13'),
(31, 7860, 1, 'req.body.section', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:41:43'),
(32, 7860, 1, 'req.body.section', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:41:43'),
(33, 7860, 1, 'req.body.section', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:42:00'),
(34, 7860, 1, 'req.body.section', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:42:03'),
(35, 7860, 1, 'req.body.section', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:43:24'),
(36, 7860, 1, 'req.body.section', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:44:00'),
(37, 7860, 1, 'req.body.section', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:44:03'),
(38, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:46:38'),
(39, 7860, 1, 'morning', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:46:45'),
(40, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:48:38'),
(41, 7860, 1, 'morning', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:48:45'),
(42, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:50:38'),
(43, 7860, 1, 'morning', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:50:45'),
(44, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:52:38'),
(45, 7860, 1, 'morning', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:52:45'),
(46, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:54:38'),
(47, 7860, 1, 'morning', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:54:45'),
(48, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:55:11'),
(49, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-01 09:57:11'),
(50, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-02 02:50:30'),
(51, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-02 02:50:50'),
(52, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-02 02:51:09'),
(53, 7860, 1, 'morning', 'กิตติภพ พิเศษชีพ', '2021-07-02 02:51:40'),
(54, 7860, 1, 'leave', 'กิตติภพ พิเศษชีพ', '2021-07-02 02:51:54'),
(55, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-02 02:52:30'),
(56, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-02 02:52:50'),
(57, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-02 02:53:09'),
(58, 7860, 1, 'morning', 'กิตติภพ พิเศษชีพ', '2021-07-02 02:53:40'),
(59, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-02 02:54:30'),
(60, 7860, 1, 'morning', 'กิตติภพ พิเศษชีพ', '2021-07-02 02:54:39'),
(61, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:38:58'),
(62, 7860, 1, 'leave', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:39:09'),
(63, 7860, 1, 'leave', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:39:19'),
(64, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:39:25'),
(65, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:39:59'),
(66, 7860, 1, 'leave', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:40:12'),
(67, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:41:59'),
(68, 7860, 1, 'leave', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:42:12'),
(69, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:43:59'),
(70, 7860, 1, 'leave', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:44:12'),
(71, 7860, 1, 'kuy', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:45:32'),
(72, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:48:47'),
(73, 7860, 1, 'leave', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:48:56'),
(74, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:49:26'),
(75, 7860, 1, '', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:49:53'),
(76, 7860, 1, 'leave', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:50:07'),
(77, 7860, 1, 'ไปส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:51:20'),
(78, 7860, 1, 'ไปส่งเอง2', 'กิตติภพ พิเศษชีพ', '2021-07-02 03:52:02'),
(79, 7860, 1, 'ลากิจ,ลาป่วย,ลากลับ', 'กิตติภพ พิเศษชีพ', '2021-07-02 04:32:04'),
(80, 7860, 1, 'ลากิจ,ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-02 04:32:26'),
(81, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-02 04:47:26'),
(82, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-02 04:49:26'),
(83, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-02 04:51:26'),
(84, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-02 04:53:26'),
(85, 7860, 1, 'kuy', 'กิตติภพ พิเศษชีพ', '2021-07-02 05:50:18'),
(86, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:10:43'),
(87, 7860, 1, 'มารับเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:11:28'),
(88, 7860, 1, ' มาจระ', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:15:32'),
(89, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:17:28'),
(90, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:17:48'),
(91, 7860, 1, 'มาส่งเอง2', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:17:53'),
(92, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:19:28'),
(93, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:19:48'),
(94, 7860, 1, 'มาส่งเอง2', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:19:53'),
(95, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:20:13'),
(96, 7860, 1, 'ลากิจ', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:20:31'),
(97, 7860, 1, 'มารับเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:22:30'),
(98, 7860, 1, 'มารับเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:24:30'),
(99, 7860, 1, 'มารับเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:26:30'),
(100, 7860, 1, 'มารับเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:28:30'),
(101, 7860, 1, 'มารับเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:30:30'),
(102, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:39:59'),
(103, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:41:59'),
(104, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:43:59'),
(105, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:45:59'),
(106, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:48:55'),
(107, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:50:55'),
(108, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:52:55'),
(109, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-08 08:54:55'),
(110, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:18:05'),
(111, 7860, 1, 'มารับเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:19:39'),
(112, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:20:30'),
(113, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:20:40'),
(114, 7860, 1, 'ลากิจ', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:27:47'),
(115, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:41:38'),
(116, 7860, 1, 'มารับเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:41:41'),
(117, 7860, 1, 'มารับเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:42:00'),
(118, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:44:26'),
(119, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:45:15'),
(120, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:45:17'),
(121, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:45:58'),
(122, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:46:17'),
(123, 7860, 1, 'มารับเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:46:32'),
(124, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:46:40'),
(125, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:47:20'),
(126, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:48:23'),
(127, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:48:25'),
(128, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:50:44'),
(129, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:50:46'),
(130, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:51:56'),
(131, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:52:43'),
(132, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:55:44'),
(133, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:56:33'),
(134, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:56:40'),
(135, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:56:59'),
(136, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:57:18'),
(137, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:57:44'),
(138, 7860, 1, 'ลากิจ', 'กิตติภพ พิเศษชีพ', '2021-07-08 09:58:12'),
(139, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:11:54'),
(140, 7860, 1, 'มารับเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:12:05'),
(141, 7860, 1, 'ลากิจ', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:12:36'),
(142, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:13:43'),
(143, 7860, 1, 'ลากิจ', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:13:57'),
(144, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:14:48'),
(145, 7860, 1, 'มารับเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:24:19'),
(146, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:25:29'),
(147, 7860, 1, 'มารับเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:29:26'),
(148, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:32:38'),
(149, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:39:34'),
(150, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:40:45'),
(151, 7860, 1, ' ', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:43:07'),
(152, 7860, 1, ' ', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:44:12'),
(153, 7860, 1, ' ', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:44:14'),
(154, 7860, 1, ' ', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:50:08'),
(155, 7860, 1, ' ', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:50:28'),
(156, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:51:04'),
(157, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:51:45'),
(158, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:52:05'),
(159, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:52:22'),
(160, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:52:40'),
(161, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:53:09'),
(162, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:53:21'),
(163, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:53:30'),
(164, 7860, 1, 'มารับเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:53:53'),
(165, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:54:02'),
(166, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:54:11'),
(167, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:54:19'),
(168, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:54:27'),
(169, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:54:38'),
(170, 7860, 1, 'มารับเอง', 'กิตติภพ พิเศษชีพ', '2021-07-08 10:54:47'),
(171, 7860, 1, 'ลาป่วย', 'กิตติภพ พิเศษชีพ', '2021-07-09 02:08:53'),
(172, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-09 02:22:59'),
(173, 7860, 1, 'มาส่งเอง', 'กิตติภพ พิเศษชีพ', '2021-07-09 02:50:20');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `room_no` varchar(255) NOT NULL,
  `room` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`room_no`, `room`) VALUES
('R11', '1/1');

-- --------------------------------------------------------

--
-- Table structure for table `student_data`
--

CREATE TABLE `student_data` (
  `id` int(11) DEFAULT NULL,
  `tag` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `idstudent` int(255) NOT NULL,
  `statusk` varchar(255) NOT NULL,
  `thome` varchar(255) NOT NULL,
  `tbus` varchar(255) NOT NULL,
  `tschool` varchar(255) NOT NULL,
  `timerequest` varchar(255) NOT NULL,
  `Checkrequest` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `ads` varchar(255) CHARACTER SET utf8 NOT NULL,
  `tel` varchar(255) NOT NULL,
  `statuscounter` int(11) NOT NULL,
  `not_use` varchar(255) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_data`
--

INSERT INTO `student_data` (`id`, `tag`, `name`, `lname`, `idstudent`, `statusk`, `thome`, `tbus`, `tschool`, `timerequest`, `Checkrequest`, `age`, `ads`, `tel`, `statuscounter`, `not_use`, `time`) VALUES
(9, 'AC233FA80968', 'ณรงค์', '', 0, 'bus', '', '', '', '', '', 0, '', '0', 0, '', '2021-05-08 06:40:00'),
(13, 'AC233FA8095F', 'สิริกร', 'คนหาญ', 7428, 'bus', '', '', '', '', '', 0, '', '0', 0, '', '2021-04-09 10:16:45'),
(1, 'AC233FA80969', 'กิตติภพ', 'พิเศษชีพ', 7860, 'school', '-', '08:50:20', '07:02:20', '09:50:20', 'มาส่งเอง', 10, '<a href=\"https://maps.google.com/?q=13.880208645762403,100.64453725506024\"target=\"_blank\" rel=“noopener”>เวนิส</a>', '0256789145', 1, '', '2021-04-08 23:36:34'),
(11, 'AC233FA80960', 'ธีรภัทร', 'ไพโรจน์', 8207, 'bus', '', '', '', '', '', 0, '', '0', 0, '', '2021-05-08 06:40:00'),
(12, 'AC233FA8095E', 'จันทร์เจ้า', 'พนมสวย', 8275, 'bus', '', '', '', '', '', 0, '', '0', 0, '', '2021-04-09 00:00:12'),
(14, 'AC233FA80962', 'ธนวัตน์', 'กลั่นชื่น', 8397, 'bus', '', '', '', '', '', 0, '', '0', 0, '', '2021-04-09 10:16:56'),
(6, 'AC233FA8097D', 'พิชยุทธ', 'ห้วยทราย', 8765, 'bus', '', '', '', '', '', 0, '', '0', 0, '', '2021-04-08 23:24:53'),
(10, 'AC233FA80964', 'จิรภิญญา', 'ทองเกิด', 8964, 'bus', '', '', '', '', '', 0, '', '0', 0, '', '2021-04-09 10:16:24'),
(5, 'AC233FA80965', 'ศุภณัฐ', 'บุตรจินดา', 9160, 'bus', '', '', '', '', '', 0, '', '0', 0, '', '2021-04-09 08:24:00'),
(4, 'AC233FA80972', 'พัชรดา', 'พิมเสน', 9256, 'outbus', '', '', '', '', '', 0, '', '0', 0, '', '2021-04-08 08:19:47'),
(15, 'AC233FA80961', 'พลวัตน์', 'สาจันทร์', 9266, 'bus', '', '', '', '', '', 0, '', '0', 0, '', '2021-04-05 08:18:44'),
(7, 'AC233FA8097C', 'กันต์ณภัทร', 'ศรีละมัน', 9307, 'bus', '', '', '', '', '', 0, '', '0', 0, '', '2021-04-09 10:17:00'),
(8, 'AC233FA80963', 'ณัฐวลัญช์', 'จันทร์หง่อม', 9351, 'bus', '', '', '', '', '', 0, '', '0', 0, '', '2021-04-08 23:27:51'),
(2, 'AC233FA80975', 'กัญญาพร', 'บุญภา', 9435, 'bus', '', '', '', '', '', 0, '<a href=\"https://maps.google.com/?q=13.8802086,100.6423486\"target=\"_blank\" rel=“noopener”>เวนิด</a>', '0', 0, '', '2021-04-09 10:16:51'),
(3, 'AC233FA80973', 'จิราพร', 'เสโนฤทธิ์', 9492, 'bus', '', '', '', '', '', 0, '<a href=\"https://maps.google.com/?q=13.826078531675876 ,100.67560257660945\"target=\"_blank\" rel=“noopener”>แฟชั่นไอส์แลน</a>', '0', 0, '', '2021-04-09 09:39:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`driver_no`);

--
-- Indexes for table `gender`
--
ALTER TABLE `gender`
  ADD PRIMARY KEY (`gender_no`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `main`
--
ALTER TABLE `main`
  ADD PRIMARY KEY (`id`),
  ADD KEY `main_ibfk_1` (`idstudent`),
  ADD KEY `main_ibfk_2` (`gender_no`),
  ADD KEY `main_ibfk_3` (`room_no`),
  ADD KEY `1st_round` (`1st_round`),
  ADD KEY `2nd_round` (`2nd_round`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`room_no`);

--
-- Indexes for table `student_data`
--
ALTER TABLE `student_data`
  ADD PRIMARY KEY (`idstudent`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `main`
--
ALTER TABLE `main`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=174;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `main`
--
ALTER TABLE `main`
  ADD CONSTRAINT `main_ibfk_1` FOREIGN KEY (`idstudent`) REFERENCES `student_data` (`idstudent`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `main_ibfk_2` FOREIGN KEY (`gender_no`) REFERENCES `gender` (`gender_no`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `main_ibfk_3` FOREIGN KEY (`room_no`) REFERENCES `room` (`room_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `main_ibfk_4` FOREIGN KEY (`1st_round`) REFERENCES `driver` (`driver_no`),
  ADD CONSTRAINT `main_ibfk_5` FOREIGN KEY (`2nd_round`) REFERENCES `driver` (`driver_no`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;