"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Expand } from "lucide-react";
import ProjectShowcaseModal from "@/components/ProjectShowcaseModal";
import { useLanguage } from "@/lib/LanguageContext";

const projectImages: Record<string, string[]> = {
  "abdymomunova": [
    "/imgs/projects/abdymomunova/000_View03_View16_Post1.webp",
    "/imgs/projects/abdymomunova/000_View03_View17_Post11.webp",
    "/imgs/projects/abdymomunova/000_View04_Post.webp",
    "/imgs/projects/abdymomunova/000_View05_Post.webp",
    "/imgs/projects/abdymomunova/000_View06_Post.webp",
    "/imgs/projects/abdymomunova/000_View10_Post11.webp",
    "/imgs/projects/abdymomunova/0pp_View01_Post.webp",
    "/imgs/projects/abdymomunova/int_View01_Post.webp",
    "/imgs/projects/abdymomunova/int_View02_Post.webp",
    "/imgs/projects/abdymomunova/int_View03_Post.webp",
    "/imgs/projects/abdymomunova/int_View04_Post.webp",
    "/imgs/projects/abdymomunova/int_View05_Post.webp",
    "/imgs/projects/abdymomunova/int_View06_Post.webp",
    "/imgs/projects/abdymomunova/int_View07_Post.webp",
    "/imgs/projects/abdymomunova/View01_Post.webp",
    "/imgs/projects/abdymomunova/View02_Post.webp",
    "/imgs/projects/abdymomunova/View03_Post.webp",
    "/imgs/projects/abdymomunova/View04_Post.webp",
    "/imgs/projects/abdymomunova/View05_Post.webp",
    "/imgs/projects/abdymomunova/View06_Post.webp",
    "/imgs/projects/abdymomunova/View07_Post.webp"
  ],
  "alaarcha": [
    "/imgs/projects/alaarcha/final_View01_Post.webp",
    "/imgs/projects/alaarcha/final_View02_Post.webp",
    "/imgs/projects/alaarcha/final_View03_Post.webp",
    "/imgs/projects/alaarcha/final_View04_Post.webp",
    "/imgs/projects/alaarcha/final_View05_Post.webp",
    "/imgs/projects/alaarcha/final_View06 (2)_Post.webp",
    "/imgs/projects/alaarcha/final_View07_Post.webp",
    "/imgs/projects/alaarcha/final_View08_Post.webp",
    "/imgs/projects/alaarcha/final_View09_Post.webp",
    "/imgs/projects/alaarcha/final_View10_Post.webp",
    "/imgs/projects/alaarcha/final_View11_Post.webp",
    "/imgs/projects/alaarcha/final_View12_Post.webp",
    "/imgs/projects/alaarcha/final_View13_Post.webp",
    "/imgs/projects/alaarcha/final_View14_Post.webp",
    "/imgs/projects/alaarcha/final_View15_Post.webp",
    "/imgs/projects/alaarcha/final_View17_Post.webp",
    "/imgs/projects/alaarcha/final_View18_Post.webp",
    "/imgs/projects/alaarcha/final_View19_Post.webp",
    "/imgs/projects/alaarcha/final_View20_Post.webp",
    "/imgs/projects/alaarcha/final_View21_Post.webp",
    "/imgs/projects/alaarcha/final_View22_Post.webp",
    "/imgs/projects/alaarcha/final_View23_Post.webp",
    "/imgs/projects/alaarcha/final_View220000_Post.webp"
  ],
  "erkindik": [
    "/imgs/projects/erkindik/1 (3).webp",
    "/imgs/projects/erkindik/1.webp",
    "/imgs/projects/erkindik/2 (2).webp",
    "/imgs/projects/erkindik/2.webp",
    "/imgs/projects/erkindik/3 (2).webp",
    "/imgs/projects/erkindik/3.webp",
    "/imgs/projects/erkindik/4.webp",
    "/imgs/projects/erkindik/5.webp",
    "/imgs/projects/erkindik/6 (2).webp",
    "/imgs/projects/erkindik/6.webp",
    "/imgs/projects/erkindik/7 (2).webp",
    "/imgs/projects/erkindik/7.webp",
    "/imgs/projects/erkindik/8 (2).webp",
    "/imgs/projects/erkindik/8.webp",
    "/imgs/projects/erkindik/9.webp",
    "/imgs/projects/erkindik/11.webp",
    "/imgs/projects/erkindik/13.webp",
    "/imgs/projects/erkindik/16.webp",
    "/imgs/projects/erkindik/20.webp",
    "/imgs/projects/erkindik/22.webp",
    "/imgs/projects/erkindik/25.webp",
    "/imgs/projects/erkindik/26.webp",
    "/imgs/projects/erkindik/28.webp",
    "/imgs/projects/erkindik/30.webp",
    "/imgs/projects/erkindik/35.webp",
    "/imgs/projects/erkindik/37.webp",
    "/imgs/projects/erkindik/38.webp",
    "/imgs/projects/erkindik/42.webp"
  ],
  "globalmed": [
    "/imgs/projects/globalmed/00_View01_Post.webp",
    "/imgs/projects/globalmed/00_View02_Post.webp",
    "/imgs/projects/globalmed/00_View03_Post.webp",
    "/imgs/projects/globalmed/00_View04_Post.webp",
    "/imgs/projects/globalmed/00_View05_Post.webp",
    "/imgs/projects/globalmed/00_View06_Post.webp",
    "/imgs/projects/globalmed/00_View07_Post.webp",
    "/imgs/projects/globalmed/00_View08_Post.webp",
    "/imgs/projects/globalmed/123312_View01_Post-gigapixel-art-scale-1_50x.webp",
    "/imgs/projects/globalmed/123312_View02_Post.webp",
    "/imgs/projects/globalmed/123312_View03_Post-gigapixel-art-scale-1_50x.webp",
    "/imgs/projects/globalmed/123312_View04_Post-gigapixel-art-scale-1_50x.webp",
    "/imgs/projects/globalmed/123312_View05_Post-gigapixel-art-scale-1_50x.webp",
    "/imgs/projects/globalmed/123312_View06_Post-gigapixel-art-scale-1_50x.webp",
    "/imgs/projects/globalmed/123312_View07_Post-gigapixel-art-scale-1_50x.webp",
    "/imgs/projects/globalmed/123312_View08_Post-gigapixel-art-scale-1_50x.webp",
    "/imgs/projects/globalmed/123312_View08_Post.webp",
    "/imgs/projects/globalmed/123312_View09_Post-gigapixel-art-scale-1_50x.webp",
    "/imgs/projects/globalmed/123312_View10_Post-gigapixel-art-scale-1_50x.webp",
    "/imgs/projects/globalmed/123312_View11_Post-gigapixel-art-scale-1_50x.webp",
    "/imgs/projects/globalmed/123312_View12_Post-gigapixel-art-scale-1_50x.webp",
    "/imgs/projects/globalmed/123312_View13_Post-gigapixel-art-scale-1_50x.webp",
    "/imgs/projects/globalmed/123312_View14_Post-gigapixel-art-scale-1_50x.webp",
    "/imgs/projects/globalmed/123312_View15_Post-gigapixel-art-scale-1_50x.webp"
  ],
  "keshte": [
    "/imgs/projects/keshte/1221_View01_Post-gigapixel-low resolution v2-2x.webp",
    "/imgs/projects/keshte/1221_View02_Post-gigapixel-low resolution v2-2x.webp",
    "/imgs/projects/keshte/1221_View03_Post-gigapixel-low resolution v2-2x.webp",
    "/imgs/projects/keshte/1221_View04_Post-gigapixel-low resolution v2-2x.webp",
    "/imgs/projects/keshte/1221_View05_Post-gigapixel-low resolution v2-2x.webp",
    "/imgs/projects/keshte/1221_View06_Post-gigapixel-low resolution v2-2x.webp",
    "/imgs/projects/keshte/1221_View07_Post-gigapixel-low resolution v2-2x.webp",
    "/imgs/projects/keshte/1221_View08_Post-gigapixel-low resolution v2-2x.webp"
  ],
  "medikon": [
    "/imgs/projects/medikon/000_View01_Post.webp",
    "/imgs/projects/medikon/000_View02_Post.webp",
    "/imgs/projects/medikon/000_View03_Post.webp",
    "/imgs/projects/medikon/000_View04_Post.webp",
    "/imgs/projects/medikon/000_View05_Post.webp",
    "/imgs/projects/medikon/000_View06_Post.webp",
    "/imgs/projects/medikon/000_View07_Post.webp",
    "/imgs/projects/medikon/000_View08_Post.webp",
    "/imgs/projects/medikon/000_View10_Post.webp",
    "/imgs/projects/medikon/2121_View01_View06_Post.webp",
    "/imgs/projects/medikon/2121_View01_View050000_Post.webp",
    "/imgs/projects/medikon/2121_View010000_Post.webp",
    "/imgs/projects/medikon/2121_View020000_Post.webp",
    "/imgs/projects/medikon/2121_View030000_Post.webp",
    "/imgs/projects/medikon/2121_View040000_Post.webp",
    "/imgs/projects/medikon/21212_Post.webp",
    "/imgs/projects/medikon/123123_Post.webp"
  ],
  "mossovet": [
    "/imgs/projects/mossovet/1_Post.webp",
    "/imgs/projects/mossovet/4141_View01_Post-gigapixel-art-scale-1_20x.webp",
    "/imgs/projects/mossovet/4141_View02_Post-gigapixel-art-scale-1_20x.webp",
    "/imgs/projects/mossovet/4141_View03_Post-gigapixel-art-scale-1_20x.webp",
    "/imgs/projects/mossovet/4141_View04_Post-gigapixel-art-scale-1_20x.webp",
    "/imgs/projects/mossovet/4141_View05_Post-gigapixel-art-scale-1_20x.webp",
    "/imgs/projects/mossovet/4141_View06_Post-gigapixel-art-scale-1_20x.webp"
  ],
  "o2_office": [
    "/imgs/projects/o2_office/0000_View01_Post.webp",
    "/imgs/projects/o2_office/0000_View02_Post.webp",
    "/imgs/projects/o2_office/0000_View03_Post.webp",
    "/imgs/projects/o2_office/0000_View04_Post.webp",
    "/imgs/projects/o2_office/0000_View05_Post.webp",
    "/imgs/projects/o2_office/0000_View030000_Post.webp",
    "/imgs/projects/o2_office/0000_View050000_Post.webp",
    "/imgs/projects/o2_office/0000_View060000_Post.webp"
  ],
  "ordo": [
    "/imgs/projects/ordo/1_View01_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View02_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View03_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View04_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View05_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View06_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View07_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View08_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View09_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View10_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View11_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View12_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View13_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View14_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View15_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View16_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View17_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View18_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View19_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View20_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View21_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View22_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View23_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View24_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View25_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View26_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View27_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View28_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View29_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View30_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View31_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View32_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View33_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View34_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View35_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View36_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View37_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View38_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View39_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View40_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View41_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View42_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View43_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View44_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View45_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View46_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View47_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View48_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View49_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View50_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View51_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View52_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View53_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View54_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View55_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View56_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View57_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View59_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View60_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View61_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View62_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View63_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View64_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/1_View65_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/ordo/12312131_pdf-1.webp"
  ],
  "orenburgskaya": [
    "/imgs/projects/orenburgskaya/123132_View20_Post.webp",
    "/imgs/projects/orenburgskaya/hall01.webp",
    "/imgs/projects/orenburgskaya/hall1.webp",
    "/imgs/projects/orenburgskaya/hall02.webp",
    "/imgs/projects/orenburgskaya/hall2.webp",
    "/imgs/projects/orenburgskaya/hall3.webp",
    "/imgs/projects/orenburgskaya/hall4.webp",
    "/imgs/projects/orenburgskaya/hall5.webp",
    "/imgs/projects/orenburgskaya/hall6.webp",
    "/imgs/projects/orenburgskaya/hall7.webp",
    "/imgs/projects/orenburgskaya/hall8.webp",
    "/imgs/projects/orenburgskaya/hall13.webp",
    "/imgs/projects/orenburgskaya/hall14.webp",
    "/imgs/projects/orenburgskaya/hall15.webp",
    "/imgs/projects/orenburgskaya/hall16.webp",
    "/imgs/projects/orenburgskaya/hall17.webp",
    "/imgs/projects/orenburgskaya/kit1.webp",
    "/imgs/projects/orenburgskaya/kit2.webp",
    "/imgs/projects/orenburgskaya/kit3.webp",
    "/imgs/projects/orenburgskaya/kit4.webp",
    "/imgs/projects/orenburgskaya/kit5.webp",
    "/imgs/projects/orenburgskaya/kit6.webp",
    "/imgs/projects/orenburgskaya/kit7.webp",
    "/imgs/projects/orenburgskaya/kit8.webp",
    "/imgs/projects/orenburgskaya/kyrg1.webp",
    "/imgs/projects/orenburgskaya/kyrg2.webp",
    "/imgs/projects/orenburgskaya/kyrg3.webp",
    "/imgs/projects/orenburgskaya/kyrg4.webp",
    "/imgs/projects/orenburgskaya/laundry1.webp",
    "/imgs/projects/orenburgskaya/laundry2.webp",
    "/imgs/projects/orenburgskaya/laundy3.webp",
    "/imgs/projects/orenburgskaya/laundy4.webp",
    "/imgs/projects/orenburgskaya/livingroom1.webp",
    "/imgs/projects/orenburgskaya/livingroom2.webp",
    "/imgs/projects/orenburgskaya/livingroom3.webp",
    "/imgs/projects/orenburgskaya/livingroom4.webp",
    "/imgs/projects/orenburgskaya/livingroom5.webp",
    "/imgs/projects/orenburgskaya/livingroom6.webp",
    "/imgs/projects/orenburgskaya/masterbedroom1.webp",
    "/imgs/projects/orenburgskaya/masterbedroom2.webp",
    "/imgs/projects/orenburgskaya/masterbedroom3.webp",
    "/imgs/projects/orenburgskaya/masterbedroom4.webp",
    "/imgs/projects/orenburgskaya/masterbedroom5.webp",
    "/imgs/projects/orenburgskaya/masterbedroom6.webp",
    "/imgs/projects/orenburgskaya/masterbedroom7.webp",
    "/imgs/projects/orenburgskaya/masterbedroom8.webp",
    "/imgs/projects/orenburgskaya/masterbedroom9.webp",
    "/imgs/projects/orenburgskaya/masterbedroom10.webp"
  ],
  "orion": [
    "/imgs/projects/orion/21_Post111-gigapixel-art-scale-1_20x.webp",
    "/imgs/projects/orion/5564-gigapixel-lines-scale-2_00x (1).webp",
    "/imgs/projects/orion/312321_View03_Post-gigapixel-art-scale-1_20x.webp",
    "/imgs/projects/orion/312321_View03_Post.webp",
    "/imgs/projects/orion/312321_View10_Post-gigapixel-art-scale-1_20x.webp",
    "/imgs/projects/orion/312321_View10_Post.webp",
    "/imgs/projects/orion/312321_View12_Post-gigapixel-art-scale-1_20x.webp",
    "/imgs/projects/orion/312321_View12_Post.webp"
  ],
  "predgorniy": [
    "/imgs/projects/predgorniy/02_Exterior - Entrance vertical.webp",
    "/imgs/projects/predgorniy/02_Exterior - Sunny day.webp",
    "/imgs/projects/predgorniy/03_Interior - Detail.webp",
    "/imgs/projects/predgorniy/03_Photo - 9.webp",
    "/imgs/projects/predgorniy/03_Photo - 10.webp",
    "/imgs/projects/predgorniy/04_19 - Photo.webp",
    "/imgs/projects/predgorniy/04_20 - Photo.webp",
    "/imgs/projects/predgorniy/22_Exterior - Day.webp",
    "/imgs/projects/predgorniy/22_Exterior - Night Closeup.webp",
    "/imgs/projects/predgorniy/22_Exterior - Sunny day.webp",
    "/imgs/projects/predgorniy/23_Exterior - Entrance vertical.webp",
    "/imgs/projects/predgorniy/23_Exterior - Evening.webp",
    "/imgs/projects/predgorniy/23_Exterior - Night Far.webp",
    "/imgs/projects/predgorniy/23_Exterior - Pool.webp",
    "/imgs/projects/predgorniy/25_Interior - Detail.webp",
    "/imgs/projects/predgorniy/26_Photo - 9.webp",
    "/imgs/projects/predgorniy/26_Photo - 10.webp",
    "/imgs/projects/predgorniy/27.webp",
    "/imgs/projects/predgorniy/30_11 - Photo.webp",
    "/imgs/projects/predgorniy/30_12 - Photo.webp",
    "/imgs/projects/predgorniy/31_15 - Photo.webp",
    "/imgs/projects/predgorniy/31_16 - Photo.webp",
    "/imgs/projects/predgorniy/31_17 - Photo.webp",
    "/imgs/projects/predgorniy/31_18 - Photo.webp",
    "/imgs/projects/predgorniy/31_19 - Photo.webp",
    "/imgs/projects/predgorniy/31_20 - Photo.webp",
    "/imgs/projects/predgorniy/predgornaya stroika1_pdf-1.webp"
  ],
  "predgorniy_apartments": [
    "/imgs/projects/predgorniy_apartments/1_pdf-1.webp",
    "/imgs/projects/predgorniy_apartments/2_pdf-1.webp",
    "/imgs/projects/predgorniy_apartments/7etaj1_pdf-1.webp",
    "/imgs/projects/predgorniy_apartments/52_pdf-1.webp",
    "/imgs/projects/predgorniy_apartments/giff_pdf-1.webp",
    "/imgs/projects/predgorniy_apartments/giff_pdf-2.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View01_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View02_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View03_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View04_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View05_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View06_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View07_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View08_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View09_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View10_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View11_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View12_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View13_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View14_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View15_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View16_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View17_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View18_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View19_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View20_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View21_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View22_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View23_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View24_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View25_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View26_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View27_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View28_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View29_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View30_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View31_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View32_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View33_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv1_View34_Post-gigapixel-art-scale-1_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View01_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View02_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View03_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View04_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View05_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View06_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View07_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View08_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View09_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View10_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View11_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View12_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View13_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View14_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View15_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View16_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View17_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View18_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View19_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View20_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View21_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View22_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View23_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View24_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View25_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv2_View26_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View01_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View02_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View03_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View04_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View05_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View06_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View07_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View08_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View09_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View10_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View11_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View12_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View13_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View14_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View15_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View16_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View17_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View18_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View19_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View20_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View21_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View22_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View23_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View24_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View25_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View26_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View27_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View28_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View29_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View30_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv3_View31_Post-gigapixel-lines-scale-2_00x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View01_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View02_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View03_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View04_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View05_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View06_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View07_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View08_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View09_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View10_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View11_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View12_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View13_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View14_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View15_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View16_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View17_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View18_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View19_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View20_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View21_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View22_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View23_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View24_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View25_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View26_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View27_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View28_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View29_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View30_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View31_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View32_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View33_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View34_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View35_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View36_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View37_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View38_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View39_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View40_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View41_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View42_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View43_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View44_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View45_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View46_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View47_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View48_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View49_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View50_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View51_Post-gigapixel-lines-scale-2_40x.webp",
    "/imgs/projects/predgorniy_apartments/kv4_View52_Post-gigapixel-lines-scale-2_40x.webp"
  ],
  "prestige": [
    "/imgs/projects/prestige/412412_View01_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View02_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View03_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View04_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View05_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View06_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View07_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View08_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View09_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View10_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View11_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View12_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View13_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View14_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View15_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View16_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View17_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View18_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/412412_View19_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/prestige/bathrooms_View01_Post.webp",
    "/imgs/projects/prestige/bathrooms_View02_Post.webp",
    "/imgs/projects/prestige/bathrooms_View03_Post.webp",
    "/imgs/projects/prestige/bathrooms_View04_Post.webp",
    "/imgs/projects/prestige/bathrooms_View06_Post.webp",
    "/imgs/projects/prestige/bathrooms_View07_Post.webp",
    "/imgs/projects/prestige/bathrooms_View08_Post.webp",
    "/imgs/projects/prestige/bathrooms_View09_Post.webp",
    "/imgs/projects/prestige/BEDROOM_2nd_d_View01_Post.webp",
    "/imgs/projects/prestige/BEDROOM_2nd_d_View02_Post.webp",
    "/imgs/projects/prestige/BEDROOM_2nd_d_View03_Post.webp",
    "/imgs/projects/prestige/BEDROOM_2nd_d_View04_Post.webp",
    "/imgs/projects/prestige/BEDROOM_DAUGHTER_View01_Post.webp",
    "/imgs/projects/prestige/BEDROOM_DAUGHTER_View02_Post.webp",
    "/imgs/projects/prestige/BEDROOM_DAUGHTER_View03_Post.webp",
    "/imgs/projects/prestige/BEDROOM_DAUGHTER_View04_Post.webp",
    "/imgs/projects/prestige/BEDROOM_MAN_View01_Post.webp",
    "/imgs/projects/prestige/BEDROOM_MAN_View02_Post.webp",
    "/imgs/projects/prestige/BEDROOM_MAN_View03_Post.webp",
    "/imgs/projects/prestige/BEDROOM_MAN_View04_Post.webp",
    "/imgs/projects/prestige/BEDROOM_MAN_View05_Post.webp",
    "/imgs/projects/prestige/BEDROOM_MAN_View06_Post.webp",
    "/imgs/projects/prestige/BEDROOM_MAN_View07_Post.webp",
    "/imgs/projects/prestige/BEDROOM_MAN_View08_Post.webp",
    "/imgs/projects/prestige/BEDROOM_MAN_View09_Post.webp",
    "/imgs/projects/prestige/BEDROOM_MAN_View10_Post.webp",
    "/imgs/projects/prestige/master bedroom_View01_Post.webp",
    "/imgs/projects/prestige/master bedroom_View02_Post.webp",
    "/imgs/projects/prestige/master bedroom_View03_Post.webp",
    "/imgs/projects/prestige/master bedroom_View04_Post.webp",
    "/imgs/projects/prestige/master bedroom_View05_Post.webp",
    "/imgs/projects/prestige/master bedroom_View06_Post.webp",
    "/imgs/projects/prestige/master bedroom_View07_Post.webp",
    "/imgs/projects/prestige/master bedroom_View08_Post.webp",
    "/imgs/projects/prestige/master bedroom_View09_Post.webp",
    "/imgs/projects/prestige/master bedroom_View10_Post.webp",
    "/imgs/projects/prestige/master bedroom_View11_Post.webp",
    "/imgs/projects/prestige/master bedroom_View12_Post.webp"
  ],
  "prestige_entrance": [
    "/imgs/projects/prestige_entrance/00_View01_Post.webp",
    "/imgs/projects/prestige_entrance/00_View02_Post.webp",
    "/imgs/projects/prestige_entrance/00_View04_Post.webp"
  ],
  "private_house": [
    "/imgs/projects/private_house/1221_View01_Post.webp",
    "/imgs/projects/private_house/1221_View02_Post.webp",
    "/imgs/projects/private_house/1221_View03_Post.webp",
    "/imgs/projects/private_house/1221_View04_Post.webp",
    "/imgs/projects/private_house/1221_View05_Post.webp",
    "/imgs/projects/private_house/1221_View06_Post.webp",
    "/imgs/projects/private_house/1221_View07_Post.webp",
    "/imgs/projects/private_house/1221_View08_Post.webp",
    "/imgs/projects/private_house/kitchen1_View03_Post.webp",
    "/imgs/projects/private_house/kitchen1_View04_Post.webp",
    "/imgs/projects/private_house/kitchen1_View05_Post.webp",
    "/imgs/projects/private_house/kitchen1_View06_Post.webp",
    "/imgs/projects/private_house/kitchen1_View07_Post.webp",
    "/imgs/projects/private_house/kitchen1_View08_Post.webp",
    "/imgs/projects/private_house/lr_View01_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View02_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View03_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View04_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View05_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View06_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View07_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View08_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View09_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View10_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View11_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View12_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View13_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View14_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View15_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View16_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View17_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View18_Post-gigapixel-art-scale-2_00x.webp",
    "/imgs/projects/private_house/lr_View19_Post-gigapixel-art-scale-2_00x.webp"
  ],
  "restaurant": [
    "/imgs/projects/restaurant/212121_View03_Post-gigapixel-sta1ndard v2-2x.webp",
    "/imgs/projects/restaurant/Fix_Person_00032_-gigapixel-low resolution v2-1.2x.webp",
    "/imgs/projects/restaurant/Fix_Person_00033_-gigapixel-low resolution v2-1.2x.webp",
    "/imgs/projects/restaurant/Fix_Person_00034_-gigapixel-low resolution v2-1.2x.webp",
    "/imgs/projects/restaurant/Fix_Person_00035_-gigapixel-low resolution v2-1.2x.webp",
    "/imgs/projects/restaurant/Fix_Person_00036_-gigapixel-low resolution v2-1.2x.webp",
    "/imgs/projects/restaurant/Fix_Person_00037_-gigapixel-low resolution v2-1.2x.webp",
    "/imgs/projects/restaurant/Fix_Person_00038_-gigapixel-low resolution v2-1.2x.webp",
    "/imgs/projects/restaurant/Fix_Person_00039_-gigapixel-low resolution v2-1.2x.webp"
  ],
  "turkish_airlines": [
    "/imgs/projects/turkish_airlines/1.webp",
    "/imgs/projects/turkish_airlines/2.webp",
    "/imgs/projects/turkish_airlines/3.webp",
    "/imgs/projects/turkish_airlines/4.webp",
    "/imgs/projects/turkish_airlines/5.webp",
    "/imgs/projects/turkish_airlines/6.webp",
    "/imgs/projects/turkish_airlines/7.webp",
    "/imgs/projects/turkish_airlines/8.webp",
    "/imgs/projects/turkish_airlines/9.webp",
    "/imgs/projects/turkish_airlines/10.webp"
  ],
  "usenbaeva": [
    "/imgs/projects/usenbaeva/111_View01_Post.webp",
    "/imgs/projects/usenbaeva/111_View02_Post.webp",
    "/imgs/projects/usenbaeva/111_View02_Post11.webp",
    "/imgs/projects/usenbaeva/111_View02_Post111.webp",
    "/imgs/projects/usenbaeva/111_View03_Post.webp",
    "/imgs/projects/usenbaeva/111_View03_Post1.webp",
    "/imgs/projects/usenbaeva/111_View04_Post.webp",
    "/imgs/projects/usenbaeva/111_View05_Post.webp",
    "/imgs/projects/usenbaeva/111_View05_Post1.webp",
    "/imgs/projects/usenbaeva/111_View06_Post.webp",
    "/imgs/projects/usenbaeva/111_View07_Post.webp",
    "/imgs/projects/usenbaeva/111_View08_Post.webp",
    "/imgs/projects/usenbaeva/111_View10_Post.webp",
    "/imgs/projects/usenbaeva/111_View10_View01_Post-gigapixel-standard-scale-2_00x.webp",
    "/imgs/projects/usenbaeva/111_View10_View01_Post.webp",
    "/imgs/projects/usenbaeva/111_View10_View02_Post.webp",
    "/imgs/projects/usenbaeva/111_View10_View03_Post.webp",
    "/imgs/projects/usenbaeva/111_View10_View04_Post.webp"
  ],
  "wellness": [
    "/imgs/projects/wellness/11_View010000_Post.webp",
    "/imgs/projects/wellness/11_View020000_Post.webp",
    "/imgs/projects/wellness/11_View030000_Post.webp",
    "/imgs/projects/wellness/11_View040000_Post.webp",
    "/imgs/projects/wellness/11_View050000_Post.webp",
    "/imgs/projects/wellness/11_View080000_Post.webp",
    "/imgs/projects/wellness/11_View080000_Post1.webp",
    "/imgs/projects/wellness/11_View090000_Post.webp",
    "/imgs/projects/wellness/11_View100000_Post.webp",
    "/imgs/projects/wellness/11_View100000_Post1.webp"
  ]
};

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    tags: string[];
    images?: string[];
    details?: {
      location?: string;
      type?: string;
      area?: string;
      scope?: string;
      year?: string;
    };
    longDescription?: string;
  } | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    // Row 1 (featured)
    {
      id: "erkindik",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["erkindik"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["erkindik"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["erkindik"].tags,
      colSpan: "lg:col-span-7 h-[350px] md:h-[450px] lg:h-[550px]",
      bg: "bg-[#4a4a4a]",
      image: projectImages.erkindik[17],
    },
    {
      id: "prestige",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["prestige"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["prestige"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["prestige"].tags,
      colSpan: "lg:col-span-5 h-[350px] md:h-[450px] lg:h-[550px]",
      bg: "bg-[#3a3a3a]",
      image: projectImages.prestige[0],
    },
    // Row 2
    {
      id: "predgorniy_apartments",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["predgorniy_apartments"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["predgorniy_apartments"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["predgorniy_apartments"].tags,
      colSpan: "lg:col-span-4 h-[350px] md:h-[400px]",
      bg: "bg-[#505050]",
      image: projectImages.predgorniy_apartments[0],
    },
    {
      id: "predgorniy",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["predgorniy"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["predgorniy"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["predgorniy"].tags,
      colSpan: "lg:col-span-4 h-[350px] md:h-[400px]",
      bg: "bg-[#3e3e3e]",
      image: projectImages.predgorniy[0],
    },
    {
      id: "ordo",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["ordo"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["ordo"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["ordo"].tags,
      colSpan: "lg:col-span-4 h-[350px] md:h-[400px]",
      bg: "bg-[#454545]",
      image: projectImages.ordo[0],
    },
    // Row 3 (wide)
    {
      id: "abdymomunova",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["abdymomunova"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["abdymomunova"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["abdymomunova"].tags,
      colSpan: "lg:col-span-6 h-[350px] md:h-[400px] lg:h-[450px]",
      bg: "bg-[#4a4a4a]",
      image: projectImages.abdymomunova[0],
    },
    {
      id: "orion",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["orion"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["orion"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["orion"].tags,
      colSpan: "lg:col-span-6 h-[350px] md:h-[400px] lg:h-[450px]",
      bg: "bg-[#3a3a3a]",
      image: projectImages.orion[0],
    },
    // Row 4
    {
      id: "alaarcha",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["alaarcha"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["alaarcha"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["alaarcha"].tags,
      colSpan: "lg:col-span-4 h-[350px] md:h-[400px]",
      bg: "bg-[#505050]",
      image: projectImages.alaarcha[0],
    },
    {
      id: "globalmed",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["globalmed"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["globalmed"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["globalmed"].tags,
      colSpan: "lg:col-span-4 h-[350px] md:h-[400px]",
      bg: "bg-[#3e3e3e]",
      image: projectImages.globalmed[0],
    },
    {
      id: "mossovet",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["mossovet"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["mossovet"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["mossovet"].tags,
      colSpan: "lg:col-span-4 h-[350px] md:h-[400px]",
      bg: "bg-[#454545]",
      image: projectImages.mossovet[0],
    },
    // Row 5 (featured)
    {
      id: "usenbaeva",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["usenbaeva"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["usenbaeva"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["usenbaeva"].tags,
      colSpan: "lg:col-span-5 h-[350px] md:h-[450px] lg:h-[500px]",
      bg: "bg-[#4a4a4a]",
      image: projectImages.usenbaeva[0],
    },
    {
      id: "wellness",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["wellness"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["wellness"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["wellness"].tags,
      colSpan: "lg:col-span-7 h-[350px] md:h-[450px] lg:h-[500px]",
      bg: "bg-[#3a3a3a]",
      image: projectImages.wellness[0],
    },
    // Row 6
    {
      id: "turkish_airlines",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["turkish_airlines"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["turkish_airlines"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["turkish_airlines"].tags,
      colSpan: "lg:col-span-4 h-[350px] md:h-[400px]",
      bg: "bg-[#505050]",
      image: projectImages.turkish_airlines[0],
    },
    {
      id: "private_house",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["private_house"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["private_house"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["private_house"].tags,
      colSpan: "lg:col-span-8 h-[350px] md:h-[400px]",
      bg: "bg-[#3e3e3e]",
      image: projectImages.private_house[0],
    },
    // Row 7 (wide)
    {
      id: "medikon",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["medikon"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["medikon"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["medikon"].tags,
      colSpan: "lg:col-span-6 h-[350px] md:h-[400px] lg:h-[450px]",
      bg: "bg-[#4a4a4a]",
      image: projectImages.medikon[2],
    },
    {
      id: "o2_office",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["o2_office"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["o2_office"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["o2_office"].tags,
      colSpan: "lg:col-span-6 h-[350px] md:h-[400px] lg:h-[450px]",
      bg: "bg-[#3a3a3a]",
      image: projectImages.o2_office[0],
    },
    // Row 8
    {
      id: "prestige_entrance",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["prestige_entrance"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["prestige_entrance"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["prestige_entrance"].tags,
      colSpan: "lg:col-span-4 h-[350px] md:h-[400px]",
      bg: "bg-[#505050]",
      image: projectImages.prestige_entrance[0],
    },
    {
      id: "keshte",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["keshte"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["keshte"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["keshte"].tags,
      colSpan: "lg:col-span-4 h-[350px] md:h-[400px]",
      bg: "bg-[#3e3e3e]",
      image: projectImages.keshte[0],
    },
    {
      id: "restaurant",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["restaurant"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["restaurant"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["restaurant"].tags,
      colSpan: "lg:col-span-4 h-[350px] md:h-[400px]",
      bg: "bg-[#454545]",
      image: projectImages.restaurant[0],
    },
    // Row 9 (full width)
    {
      id: "orenburgskaya",
      title: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["orenburgskaya"].title,
      description: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["orenburgskaya"].description,
      tags: (t.projects.list as Record<string, typeof t.projects.list.erkindik>)["orenburgskaya"].tags,
      colSpan: "lg:col-span-8 lg:col-start-3 h-[300px] md:h-[350px] lg:h-[400px]",
      bg: "bg-[#4a4a4a]",
      image: projectImages.orenburgskaya[0],
    },
  ];

  const handleProjectClick = (id: string) => {
    const defaultData = projects.find((p) => p.id === id);
    if (!defaultData) return;
    
    const trans = (t.projects.list as Record<string, typeof t.projects.list.erkindik>)[id];

    setSelectedProject({
      title: trans.title,
      description: trans.description,
      tags: [...trans.tags],
      images: projectImages[id] || [],
      details: trans.details,
      longDescription: trans.longDescription || trans.description
    });
  };

  return (
    <section 
      id="projects" 
      className="relative bg-bg-beige text-warm-black flex flex-col overflow-hidden py-10 md:py-16 lg:py-20"
    >
      <div 
        className="max-w-[1440px] mx-auto relative z-10 w-full px-12 md:px-16 lg:pl-20 lg:pr-12"
      >
        {/* Section Heading — centered on mobile, left on desktop */}
        <div className="flex flex-col items-center lg:items-start max-w-2xl mx-auto lg:mx-0">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12px] md:text-[13px] font-bold tracking-[0.3em] uppercase text-gold-accent mb-6 block font-body"
          >
            {t.projects.label}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-warm-black leading-[1.15] max-w-xl text-center lg:text-left"
          >
            {t.projects.title}
          </motion.h2>
        </div>

        {/* Spacer between heading and grid */}
        <div className="h-6 md:h-10 lg:h-12" />

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-12 gap-4 lg:gap-5 pb-4 snap-x snap-mandatory scrollbar-none -mx-12 px-12 lg:mx-0 lg:px-0">
          {/* Mobile: always show all projects (horizontal scroll). Desktop: respect showAllProjects toggle */}
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className={`relative overflow-hidden group rounded-none cursor-pointer min-w-[85vw] sm:min-w-[50vw] lg:min-w-0 snap-center w-full lg:w-auto ${project.colSpan} ${!showAllProjects && index >= 5 ? "lg:hidden" : ""}`}
            >
              {/* Card Background Image or Solid Color */}
              {project.image ? (
                <>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 50vw"
                    unoptimized
                    className="object-cover z-0 transition-all duration-700 ease-[0.16, 1, 0.3, 1] group-hover:scale-105 group-hover:brightness-75"
                  />
                  {/* Subtle dark gradient overlay for text readability */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/30 to-black/10 transition-opacity duration-500 group-hover:from-black/90 group-hover:via-black/40 group-hover:to-black/20" />
                </>
              ) : (
                <div className={`absolute inset-0 z-0 ${project.bg} group-hover:brightness-75 transition-all duration-500`} />
              )}

              {/* Expand / Fullscreen Icon — top right */}
              <div className="absolute top-4 right-4 z-30 p-2 bg-black/30 backdrop-blur-sm rounded-full text-white/60 group-hover:text-white group-hover:bg-black/50 transition-all duration-300 opacity-70 group-hover:opacity-100">
                <Expand className="w-4 h-4" />
              </div>

              {/* Text Over Image Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 sm:p-10 lg:p-12">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16, 1, 0.3, 1]">
                  {/* Tags in small uppercase */}
                  <span className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-gold-accent mb-3 block">
                    {project.tags.join(" / ")}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white mb-2 leading-none">
                    {project.title}
                  </h3>

                  {/* Description (Fades in on hover) */}
                  <p className="font-body text-xs md:text-sm text-white/70 font-light leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button Spacer — reduced */}
        <div className="h-4 md:h-6" />

        {/* Watch All Projects Button */}
        {!showAllProjects && (
          <div className="hidden lg:flex justify-center">
            <motion.button
              onClick={() => setShowAllProjects(true)}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold border border-warm-black/25 text-warm-black hover:bg-warm-black hover:text-white hover:border-warm-black transition-all duration-300 font-body rounded-none"
              style={{
                padding: "16px 36px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {t.projects.btn}
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
            </motion.button>
          </div>
        )}
      </div>

      <ProjectShowcaseModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}
