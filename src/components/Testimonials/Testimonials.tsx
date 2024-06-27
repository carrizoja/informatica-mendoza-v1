"use client";

import React from "react";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { db } from "../../config/getFirestoreApp";
import styles from "./testimonials.module.css";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  interface Testimonial {
    id: string;
    avatar: string;
    name: string;
    profession: string;
    review: string;
  }

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get fetch projects from firebase
    /* const db = getFirestore(); */
    const itemsCollection = collection(db, "testimonials");
    getDocs(itemsCollection).then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log("No matching documents.");
      }
      setTestimonials(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          avatar: doc.data().avatar,
          name: doc.data().name,
          profession: doc.data().profession,
          review: doc.data().review,
        }))
      );
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h2 className="text font-bold text-3xl">Ellos confiaron en nosotros</h2>
      {loading ? (
        <span className="visually-hidden">Loading...</span>
      ) : (
        
        <section className="border border-white w-2/3 rounded-lg mb-10">
        
          <Swiper 
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {testimonials.map((testimonial) => {
              return (
                <SwiperSlide
                  key={testimonial.id}
                  className={styles.testimonial}
                >
                  <div className={styles.client__avatar}>
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <h5 className={styles.client__name}>{testimonial.name}</h5>
                  <h6 className={styles.client__profession}>
                    {testimonial.profession}
                  </h6>
                  <small className={styles.client__review}>
                    {testimonial.review}
                  </small>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      )}
    </>
  );
};

export default Testimonials;
