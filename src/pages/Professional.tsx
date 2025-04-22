
import { Layout } from '@/components/layout/Layout';
import { Briefcase, Award, Users, Star, Code, Database, Cloud, BarChart, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Professional() {
  return (
    <Layout>
      <div className="py-16 md:py-24 container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Professional Journey</h1>

          {/* Professional Summary */}
          <Card className="mb-10 bg-secondary/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl">
                <Briefcase className="h-7 w-7 text-accent" />
                Professional Summary
              </CardTitle>
              <CardDescription className="text-lg mt-3 text-foreground">
                <b>Visionary Engineering Leader</b> with over <b>27 years of experience</b> driving end-to-end software product development, 
                scaling SaaS platforms, and fostering high-performing global teams. Renowned for <b>engineering leadership, SaaS product strategy, and deep technical acumen</b>, 
                delivering robust, modern solutions across microservices, cloud-native, and distributed systems.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc text-base ml-5 space-y-2 text-muted-foreground">
                <li>
                  <b>Proven expertise</b> in <span className="text-accent-foreground">SaaS Product Strategy</span>, Architecture Design, Platform Modernization, and product lifecycle leadership.
                </li>
                <li>
                  <b>Champion of Lean Product Development</b>, embedding Agile and DevOps cultures to enable rapid, high-quality delivery cycles and continuous innovation.
                </li>
                <li>
                  <b>Advanced in Cloud Architecture & SaaS Optimization:</b> Led multi-tenant environments, modernization projects, and robust, secure deployments on AWS & Azure.
                </li>
                <li>
                  <b>Architect of cutting-edge SaaS applications</b> and microservices, with a strong focus on innovation—enabling transformative business outcomes through AI/ML and data analytics.
                </li>
                <li>
                  <b>Leader in Stakeholder Management:</b> Excels in cross-functional alignment, bridging technical and non-technical teams, and driving key product roadmaps with business vision.
                </li>
                <li>
                  <b>Expert in Budget & Resource Optimization:</b> Ensures efficiency, cost savings, and customer satisfaction while maintaining superior product performance.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Core Competencies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Star className="h-6 w-6 text-accent" />
                  Core Competencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-accent" /> Product Development</li>
                  <li className="flex items-center gap-2"><Cloud className="h-4 w-4 text-accent" /> Cloud Architecture</li>
                  <li className="flex items-center gap-2"><BarChart className="h-4 w-4 text-accent" /> Data Analytics</li>
                  <li className="flex items-center gap-2"><Code className="h-4 w-4 text-accent" /> Scalable Architecture</li>
                  <li className="flex items-center gap-2"><Lightbulb className="h-4 w-4 text-accent" /> AI/ML Implementation</li>
                  <li className="flex items-center gap-2"><Users className="h-4 w-4 text-accent" /> Team Leadership</li>
                </ul>
              </CardContent>
            </Card>

            {/* Soft Skills + Certifications */}
            <div className="flex flex-col gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Users className="h-6 w-6 text-accent" />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Direction &amp; Focus</li>
                    <li>Vision &amp; Strategy</li>
                    <li>Leadership &amp; Character</li>
                    <li>Emotional Intelligence</li>
                    <li>Resilience &amp; Courage</li>
                    <li>Analytical &amp; Detail Oriented</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Award className="h-6 w-6 text-accent" />
                    Certifications &amp; Awards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>PMP® Certification Training Course (2005)</li>
                    <li>Certified Supply Chain Professional (CSCP)</li>
                    <li>Patent: Interacting methods of data extraction (US 8600990)</li>
                    <li>Awarded for Excellence in Performance (PowerSchool)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Work Experience Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Briefcase className="h-6 w-6 text-accent" />
                Work Experience Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-md">PowerSchool Inc. <span className="font-normal text-muted-foreground">(2017–Present)</span></div>
                  <div className="text-sm text-muted-foreground">VP of Engineering, Analytics & Insights, Behavior</div>
                  <ul className="list-disc ml-5 mt-1 text-muted-foreground space-y-1 text-[15px]">
                    <li>Expanded and led engineering teams (50+), accomplishing 10x platform scalability and responsiveness.</li>
                    <li>Pioneered cross-functional forums reducing escalations by 40% and driving stakeholder engagement.</li>
                    <li>Transformed organization for operational efficiency, executed large-scale cloud migrations (Azure to AWS), and innovation cycles.</li>
                    <li>Directed assessment tools automation and high-impact initiatives optimizing resource allocation.</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-md">Zenoti <span className="font-normal text-muted-foreground">(2015–17)</span></div>
                  <div className="text-sm text-muted-foreground">Director of Engineering, BI & Analytics Platform</div>
                  <ul className="list-disc ml-5 mt-1 text-muted-foreground space-y-1 text-[15px]">
                    <li>Launched analytics platform for 100+ customers, leading to significant process improvements.</li>
                    <li>Engineered a data migration platform—reduced timelines by 66%, drove 250% revenue growth via new offerings.</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-md">TekSystems/FCS Consulting <span className="font-normal text-muted-foreground">(2012–15)</span></div>
                  <div className="text-sm text-muted-foreground">Director of Engineering</div>
                  <ul className="list-disc ml-5 mt-1 text-muted-foreground space-y-1 text-[15px]">
                    <li>Led delivery of Oracle Analytics, optimizing client satisfaction and delivery timelines (80+ engineers).</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold text-md">SumTotal Systems <span className="font-normal text-muted-foreground">(2010–12)</span></div>
                  <div className="text-sm text-muted-foreground">Sr. Engineering Manager</div>
                </div>
                <div>
                  <div className="font-bold text-md">Oracle Corp, Infosys <span className="font-normal text-muted-foreground">(1997–10)</span></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
