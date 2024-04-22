import pelado from "@assets/imgs/pelado.jpeg";
import televisa from "@assets/imgs/televisaunivision.jpg";
import benedetis from "@assets/imgs/benedetis.jpeg";
import sanPancho from "@assets/imgs/sanpancho.png";
import Leanber from "@assets/imgs/leanber.png";
import nodeJs from "@assets/imgs/nodejs.png";
import React from "@assets/imgs/react.png";
import mongodb from "@assets/imgs/mongodb.svg";
import GCP from "@assets/imgs/gcp.png";
import fast from "@assets/imgs/fastify.png";
import redis from "@assets/imgs/redis.png";
export const projects = [
  {
    imagen: pelado.src,
    nombre: "Pelado camaron",
    description:
      "I was part of a team that created a POS for a local restaurant in Colima, we design and develop this platform using nodeJs,react, express and mongoDb",
    techs: [
      { name: "nodeJs", src: nodeJs.src },
      { name: "React", src: React.src },
      { name: "mongodb", src: mongodb.src },
    ],
  },
  {
    imagen: televisa.src,
    nombre: "Televisa univision",
    description:
      "I was part of multi national team that develops an automated process for assets migrations, we developed some microservices using redis, GCP, Nodejs and React",
    techs: [
      { name: "nodeJs", src: fast.src },
      { name: "GCP", src: GCP.src },
      { name: "redis", src: redis.src },
      { name: "redis", src: nodeJs.src },
    ],
  },
  {
    imagen: benedetis.src,
    nombre: "Bennedetis e-learning",
    description:
      "I was part of a team that created a POS for a local restaurant in Colima, we design and develop this platform using nodeJs,react, express and mongoDb",
    techs: [
      { name: "nodeJs", src: nodeJs.src },
      { name: "React", src: React.src },
      { name: "mongodb", src: mongodb.src },
    ],
  },
  {
    imagen: sanPancho.src,
    nombre: "San pancho CRM",
    description:
      "I was part of a team that created a POS for a local restaurant in Colima, we design and develop this platform using nodeJs,react, express and mongoDb",
    techs: [
      { name: "nodeJs", src: nodeJs.src },
      { name: "React", src: React.src },
      { name: "mongodb", src: mongodb.src },
    ],
  },
  {
    imagen: Leanber.src,
    nombre: "Leanber E commerce platform",
    description:
      "I was part of a team that created a POS for a local restaurant in Colima, we design and develop this platform using nodeJs,react, express and mongoDb",
    techs: [
      { name: "nodeJs", src: nodeJs.src },
      { name: "React", src: React.src },
      { name: "mongodb", src: mongodb.src },
    ],
  },
];
