import { CiLink } from "react-icons/ci";
import {
    FaDownload,
    FaGithub,
    FaLinkedin,
    FaPhoneSquare,
    FaYoutube
} from "react-icons/fa";
import {
    FaArrowUpRightFromSquare,
    FaCodeBranch,
    FaLocationDot,
    FaMedium
} from "react-icons/fa6";
import { FcBriefcase, FcGlobe } from "react-icons/fc";
import { GiCheckMark } from "react-icons/gi";
import { IoMdArrowDropright, IoMdCloseCircle } from "react-icons/io";
import { LuChevronsUpDown } from "react-icons/lu";
import { MdEmail, MdOutlineMenu } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { EnglishFlagIcon } from "@/shared/ui/icon/EnglishFlag.icon";
import { FrenchFlagIcon } from "@/shared/ui/icon/FrenchFlag.Icon";
import { SpinnerIcon } from "@/shared/ui/icon/Spinner.Icon";

/**
 * Centralized icon re-exports.
 *
 * @description
 * Re-exports all third-party react-icons and custom SVG icon components under
 * consistent `Icon*` names. Import icons from this module rather than directly
 * from react-icons to keep icon sources easy to swap.
 */
export const IconDownload = FaDownload;
export const IconGithub = FaGithub;
export const IconLinkedIn = FaLinkedin;
export const IconYoutube = FaYoutube;
export const IconMedium = FaMedium;
export const IconInstagram = RiInstagramFill;
export const IconClose = IoMdCloseCircle;
export const IconGlobe = FcGlobe;
export const IconBriefcase = FcBriefcase;
export const IconCheckMark = GiCheckMark;
export const IconLink = CiLink;
export const IconPhone = FaPhoneSquare;
export const IconLocation = FaLocationDot;
export const IconEmail = MdEmail;
export const IconMenu = MdOutlineMenu;
export const IconArrowUpRight = FaArrowUpRightFromSquare;
export const IconCodeBranch = FaCodeBranch;
export const IconChevronUpDown = LuChevronsUpDown;
export const IconArrowRight = IoMdArrowDropright;
export const IconEnglishFlag = EnglishFlagIcon;
export const IconFrenchFlag = FrenchFlagIcon;
export const IconSpinner = SpinnerIcon;
