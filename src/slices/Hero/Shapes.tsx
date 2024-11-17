"use client";
import * as Three from "three";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";

const Shapes = () => {
  return (
    <div className="md:col-start-2 aspect-square md:mt-0  md:col-span-1 row-start-1 ">
      <Canvas></Canvas>
    </div>
  );
};

export default Shapes;
