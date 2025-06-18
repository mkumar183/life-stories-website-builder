import { Layout } from '@/components/layout/Layout';
import {
  Briefcase,
  Award,
  Users,
  Star,
  Code,
  Database,
  Cloud,
  BarChart,
  Lightbulb,
  ExternalLink,
  FileText,
  Trophy,
  Github,
  Rocket
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Professional() {
  return (
    <Layout>
      <div className="py-16 md:py-24 container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold">
              Professional Journey
            </h1>
            <Button 
              onClick={() => window.open('https://dev.navigara.com/developers/3054fa04-edbe-b02d-b099-f133eb378621?rid=815de3ce-bcf5-4b80-8490-561c80ae3dcb&tab=summary', '_blank')}
              className="flex items-center gap-2"
            >
              Git Report <ExternalLink className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="resume" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="resume" className="flex items-center gap-2">
                <FileText className="h-4 w-4" /> Resume
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex items-center gap-2">
                <Trophy className="h-4 w-4" /> Key Achievements
              </TabsTrigger>
              <TabsTrigger value="github" className="flex items-center gap-2">
                <Github className="h-4 w-4" /> GitHub Report
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <Rocket className="h-4 w-4" /> Live Projects
              </TabsTrigger>
            </TabsList>

            {/* Resume Tab */}
            <TabsContent value="resume">
              {/* Professional Summary */}
              <Card className="mb-10 bg-secondary/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl md:text-3xl">
                    <Briefcase className="h-7 w-7 text-accent" />
                    Professional Summary
                  </CardTitle>
                  <CardDescription className="text-lg mt-3 text-foreground">
                    <b>Visionary Engineering Leader</b> with over <b>27 years of experience</b> driving end-to-end software product development, scaling SaaS platforms from concept to multi-million dollar global solutions, and leading high-performing cross-functional engineering teams.<br /><br />
                    Proven expertise in SaaS Product Strategy, Architecture Design, and Platform Modernization, enabling seamless integration, scalability, and performance optimization across cloud-native environments.<br /><br />
                    Deep technical acumen in microservices architecture, cloud-native applications (AWS, Azure, GCP), and distributed systems, delivering robust, scalable solutions that meet enterprise-grade security and compliance standards.<br /><br />
                    Pioneered Agile Transformation in large organizations, embedding a DevOps culture across global teams, leveraging CI/CD pipelines, Kubernetes, Docker, and automation tools to ensure high-velocity, iterative product delivery.<br /><br />
                    Architect of cutting-edge SaaS applications, responsible for full product lifecycle management—from conceptualization and market validation, to technical design, MVP delivery, and commercial launch—with a focus on user-centric design and data-driven product decisions.<br /><br />
                    Champion of Lean Product Development methodologies, driving continuous delivery pipelines, reducing time-to-market via advanced A/B testing, telemetry, and data-driven decisions.<br /><br />
                    Demonstrated success in Cloud Architecture and SaaS Optimization, managing multi-tenant environments, ensuring high availability (HA), disaster recovery (DR), and robust security postures, aligned with SOC 2 and GDPR compliance.<br /><br />
                    Exceptional stakeholder management, bridging technical and non-technical teams, and fostering collaboration to align product roadmaps with business goals.<br /><br />
                    Strong focus on innovation, enabling teams to harness emerging technologies such as AI/ML, IoT, and blockchain to unlock new revenue and product differentiation in competitive markets.<br /><br />
                    Adept at budget management and resource optimization—reducing costs through cloud cost optimization techniques while maintaining superior product performance and customer satisfaction.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc text-base ml-5 space-y-2 text-muted-foreground">
                    <li>
                      <b>SaaS Product Strategy & Platform Modernization:</b> Strategy, architecture, and modernization to enable integration, scalability, and cloud performance.
                    </li>
                    <li>
                      <b>Agile & DevOps Transformation:</b> Leading large-scale agile shifts, embedding high-velocity DevOps cultures with modern toolchains.
                    </li>
                    <li>
                      <b>Technical Leadership:</b> Microservices, cloud-native, and distributed system delivery focused on security and compliance.
                    </li>
                    <li>
                      <b>Product Lifecycle Management:</b> Full management from ideation to launch with user- and data-driven focus.
                    </li>
                    <li>
                      <b>Lean & Data-Driven Product Development:</b> Continuous delivery, A/B testing, telemetry, and product analytics.
                    </li>
                    <li>
                      <b>Innovation & Emerging Tech:</b> Leading adoption of AI/ML, IoT, blockchain.
                    </li>
                    <li>
                      <b>Stakeholder Management:</b> Bridging technical/non-technical teams, product alignment with business goals.
                    </li>
                    <li>
                      <b>Cost & Resource Optimization:</b> Budget management and cloud cost efficiency for stellar product outcomes.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Core Competencies & Soft Skills */}
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
                      <li className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-accent" /> Product Development
                      </li>
                      <li className="flex items-center gap-2">
                        <Cloud className="h-4 w-4 text-accent" /> Cloud Architecture
                      </li>
                      <li className="flex items-center gap-2">
                        <BarChart className="h-4 w-4 text-accent" /> Data Analytics
                      </li>
                      <li className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-accent" /> Scalable Architecture
                      </li>
                      <li className="flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-accent" /> AI/ML Implementation
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-accent" /> Engineering Leadership
                      </li>
                      <li className="flex items-center gap-2">
                        <Database className="h-4 w-4 text-accent" /> Resource Allocation & Budgeting
                      </li>
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
                        <li>Strategic Vision & Direction</li>
                        <li>Leadership & Team Building</li>
                        <li>Analytical Thinking & Detail Orientation</li>
                        <li>Stakeholder Management</li>
                        <li>Communication & Collaboration</li>
                        <li>Decision-Making with Data</li>
                        <li>Resilience & Problem Solving</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Award className="h-6 w-6 text-accent" />
                        Certifications & Awards
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>PMP® Certification Training Course (2005)</li>
                        <li>Certified Supply Chain Professional (CSCP)</li>
                        <li>Patent: Interacting methods of data extraction (US 8600990, Mar 31, 2008)</li>
                        <li>Awarded for Excellence in Performance Tuning (Oracle)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Work Experience */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Briefcase className="h-6 w-6 text-accent" />
                    Work Experience Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-7">
                    <div>
                      <div className="font-bold text-md">PowerSchool Inc. <span className="font-normal text-muted-foreground">(2017 – Present)</span></div>
                      <div className="text-sm text-muted-foreground">VP of Engineering, Analytics & Insights, Behavior</div>
                      <ul className="list-disc ml-5 mt-1 text-muted-foreground space-y-1 text-[15px]">
                        <li>Expanded engineering teams to 50+, driving a 10x platform capability and responsiveness improvement.</li>
                        <li>Established forums to reduce invalid support escalations by 40%+, optimizing ops and stakeholder engagement.</li>
                        <li>Pioneered transformative team reorganization, boosting efficiency and accelerating innovation cycles.</li>
                        <li>Led migration of 300+ tenants from Azure to AWS, achieving 80% upgrade timeline reduction and smoother deployments.</li>
                        <li>Automated assessment loading features, redeploying 12 engineers to high-impact projects and maximizing productivity.</li>
                        <li>Fostered a high-performance culture committed to rigorous QA and OKR/KPIs.</li>
                      </ul>
                      <div className="text-sm text-muted-foreground mt-2">Sr. Director of Engineering (Schoology, Performance Matters, Kickboard, Haiku Learning)</div>
                      <ul className="list-disc ml-5 mt-1 text-muted-foreground space-y-1 text-[15px]">
                        <li>Built and led engineering teams (50+) for classroom tech products.</li>
                        <li>Directed Haiku Learning through sunset phase and migration to Schoology.</li>
                        <li>Integrated Kickboard/Performance Matters teams post-acquisition—reduced costs by 80%.</li>
                        <li>Drove escalation+release management, enabling global team accountability.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-bold text-md">Zenoti <span className="font-normal text-muted-foreground">(2015–2017)</span></div>
                      <div className="text-sm text-muted-foreground">Director of Engineering, BI & Analytics Platform</div>
                      <ul className="list-disc ml-5 mt-1 text-muted-foreground space-y-1 text-[15px]">
                        <li>Launched analytics platform for 100+ customers, revolutionizing insights and decisions.</li>
                        <li>Designed data migration engine, cutting implementation timelines by 66% and expediting onboarding.</li>
                        <li>Formed collaborative, high-performance product, QA, and cloud ops teams.</li>
                        <li>Ran a successful Beta, onboarding key enterprise clients and earning a 250% revenue boost.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-bold text-md">TekSystems <span className="font-normal text-muted-foreground">(2012–2015)</span></div>
                      <div className="text-sm text-muted-foreground">Director of Engineering</div>
                      <ul className="list-disc ml-5 mt-1 text-muted-foreground space-y-1 text-[15px]">
                        <li>Led strategic accounts for GE and Schlumberger, managing Oracle Analytics delivery for 80+ engineers.</li>
                        <li>Built accelerators, increasing service revenue by 40%.</li>
                        <li>Drove cross-team training, process, and efficiency improvements.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-bold text-md">SumTotal Systems <span className="font-normal text-muted-foreground">(2010–2012)</span></div>
                      <div className="text-sm text-muted-foreground">Sr. Engineering Manager</div>
                      <ul className="list-disc ml-5 mt-1 text-muted-foreground space-y-1 text-[15px]">
                        <li>Improved enterprise reporting, reducing support tickets by 60% and boosting customer satisfaction by 30%.</li>
                        <li>Increased large client system capacity, eradicating bottlenecks and optimizing performance.</li>
                        <li>Launched new analytics platform Beta in a year, showcasing agile innovation.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-bold text-md">Oracle Corp <span className="font-normal text-muted-foreground">(1999–2010)</span></div>
                      <ul className="list-disc ml-5 mt-1 text-muted-foreground space-y-1 text-[15px]">
                        <li>Launched advanced analytics platform reaching 100+ clients across verticals.</li>
                        <li>Engineered a data migration engine, reducing implementation timelines by 66%.</li>
                        <li>Managed 80+ engineers for successful Oracle Analytics deployments and strategic account wins.</li>
                        <li>Developed service accelerators, increasing revenue by 40%.</li>
                        <li>Revamped enterprise reporting—60% ticket drop, 30% boost in satisfaction.</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-bold text-md">Infosys, Bangalore <span className="font-normal text-muted-foreground">(1997–1999)</span></div>
                      <div className="text-sm text-muted-foreground">Software Engineer</div>
                      <ul className="list-disc ml-5 mt-1 text-muted-foreground space-y-1 text-[15px]">
                        <li>Enhanced Nordstrom USA client systems (COBOL mainframes) with minimal change requests and high quality.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Key Achievements Tab */}
            <TabsContent value="achievements">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Trophy className="h-6 w-6 text-accent" />
                    Key Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Leadership & Scale</h3>
                      <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                        <li>Expanded engineering teams to 50+, driving 10x platform capability improvement</li>
                        <li>Led migration of 300+ tenants from Azure to AWS, achieving 80% upgrade timeline reduction</li>
                        <li>Reduced support escalations by 40%+ through optimized operations</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Technical Innovation</h3>
                      <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                        <li>Designed data migration engine, cutting implementation timelines by 66%</li>
                        <li>Launched analytics platform reaching 100+ clients across verticals</li>
                        <li>Patent: Interacting methods of data extraction (US 8600990)</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Business Impact</h3>
                      <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                        <li>Increased service revenue by 40% through accelerator development</li>
                        <li>Achieved 250% revenue boost through successful enterprise client onboarding</li>
                        <li>Reduced costs by 80% through strategic team integration</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* GitHub Report Tab */}
            <TabsContent value="github">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Github className="h-6 w-6 text-accent" />
                    GitHub Activity & Contributions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
                      <p className="text-muted-foreground">
                        View detailed GitHub activity and contributions at:
                      </p>
                      <Button 
                        onClick={() => window.open('https://dev.navigara.com/developers/3054fa04-edbe-b02d-b099-f133eb378621?rid=815de3ce-bcf5-4b80-8490-561c80ae3dcb&tab=summary', '_blank')}
                        className="mt-4 flex items-center gap-2"
                      >
                        View GitHub Report <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Live Projects Tab */}
            <TabsContent value="projects">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Rocket className="h-6 w-6 text-accent" />
                    Live Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Current Projects</h3>
                      <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                        <li>Life Stories Website Builder - A personal website builder for sharing life journeys</li>
                        <li>Cloud Migration Toolkit - Tools for seamless cloud platform transitions</li>
                        <li>Analytics Dashboard - Real-time business intelligence platform</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2">Project Highlights</h3>
                      <ul className="list-disc ml-5 space-y-2 text-muted-foreground">
                        <li>Built with modern tech stack: React, TypeScript, Tailwind CSS</li>
                        <li>Focus on scalability, performance, and user experience</li>
                        <li>Open-source contributions and community engagement</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
