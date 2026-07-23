"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Globe,
  Briefcase,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-36">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge>
              Trusted Workforce Partner Across The United States
            </Badge>

            <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 lg:text-7xl">
              Building
              <span className="text-blue-600"> Technology Teams </span>
              That Move Businesses Forward.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Xenova Global connects organizations with exceptional technology
              professionals, helping companies innovate faster and professionals
              discover meaningful career opportunities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button>
                Hire Talent
              </Button>

              <Button variant="outline">
                Explore Careers
              </Button>
            </div>

            <div className="mt-14 flex flex-wrap gap-10 text-sm text-slate-600">
              <div>
                <p className="text-3xl font-bold text-blue-600">500+</p>
                Organizations
              </div>

              <div>
                <p className="text-3xl font-bold text-blue-600">10K+</p>
                Professionals
              </div>

              <div>
                <p className="text-3xl font-bold text-blue-600">98%</p>
                Client Satisfaction
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .9 }}
            className="relative"
          >
            <div className="rounded-[40px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-12 shadow-2xl">

              <div className="space-y-6">

                <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow">
                  <Users className="text-blue-600" size={32}/>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Technology Professionals
                    </h3>
                    <p className="text-slate-500">
                      Verified & Experienced
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow">
                  <Briefcase className="text-blue-600" size={32}/>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Enterprise Solutions
                    </h3>
                    <p className="text-slate-500">
                      Built For Growing Businesses
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow">
                  <Globe className="text-blue-600" size={32}/>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Nationwide Reach
                    </h3>
                    <p className="text-slate-500">
                      Supporting Organizations Across The U.S.
                    </p>
                  </div>
                </div>

              </div>

              <div className="mt-10 rounded-3xl bg-blue-600 p-8 text-white">
                <TrendingUp size={36}/>

                <h3 className="mt-4 text-2xl font-bold">
                  Accelerating Business Growth
                </h3>

                <p className="mt-3 text-blue-100">
                  Helping organizations build exceptional technology teams that
                  deliver measurable results.
                </p>

                <button className="mt-6 flex items-center gap-2 font-semibold">
                  Learn More
                  <ArrowRight size={18}/>
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}