// Viraj Immigration Pvt Ltd - Complete Application State & Interactive Logic

const VISA_PATHWAYS = {
  // CANADA PATHWAYS
  "canada-express-entry": {
    country: "Canada",
    flag: "🇨🇦",
    title: "Canada Express Entry Program 2026",
    badge: "Fastest PR Pathway (6–8 Months)",
    minPoints: "67 / 100 FSW Points + Competitive CRS Score",
    processingTime: "6 to 8 Months",
    overview: "Canada's Express Entry system manages permanent residence applications for skilled workers across three federal economic programs: Federal Skilled Worker (FSW), Canadian Experience Class (CEC), and Federal Skilled Trades (FST), alongside category-based selection draws (STEM, Healthcare, French proficiency, Trades, and Transport).",
    highlights: [
      "Direct Permanent Residency for you, your spouse, and dependent children",
      "Category-based draws with lower CRS cutoffs for STEM, Healthcare & French speakers",
      "No job offer mandatory for Federal Skilled Worker (FSW) stream",
      "Access to universal Canadian healthcare, free public schooling, and citizenship path in 3 years"
    ],
    requirements: [
      "Minimum 1 year of continuous full-time skilled work experience (TEER 0, 1, 2, or 3)",
      "Language proficiency: Minimum CLB 7 (IELTS 6.0 in each band) for FSW",
      "Educational Credential Assessment (ECA) from WES, IQAS, or ICAS",
      "Minimum 67 points on the 100-point FSW eligibility grid"
    ]
  },
  "canada-pnp": {
    country: "Canada",
    flag: "🇨🇦",
    title: "Provincial Nominee Programs (PNP) Canada",
    badge: "+600 CRS Bonus Points",
    minPoints: "Province-Specific EOI Grid (SINP, OINP, BCPNP, AAIP, MPNP)",
    processingTime: "8 to 14 Months",
    overview: "Worried about low CRS scores or missing federal ITA draws? Provincial Nominee Programs allow Canadian provinces and territories to nominate individuals who match regional labor market needs. Receiving an Enhanced Provincial Nomination automatically adds 600 points to your Express Entry CRS score, guaranteeing an Invitation to Apply (ITA).",
    highlights: [
      "Adds 600 CRS points to your Express Entry profile for guaranteed ITA",
      "Dedicated streams for IT professionals, healthcare workers, trades, and graduates",
      "Targeted pathways in Ontario (OINP), Saskatchewan (SINP), Alberta (AAIP), BC, and Nova Scotia",
      "End-to-end provincial Expression of Interest (EOI) filing and documentation support"
    ],
    requirements: [
      "Occupation listed on the target province's In-Demand Occupation List",
      "Intention to reside and work in the nominating Canadian province",
      "Valid language test results (CLB 5 to CLB 7 depending on stream)",
      "Sufficient settlement funds as per federal LICO guidelines"
    ]
  },
  "canada-spouse": {
    country: "Canada",
    flag: "🇨🇦",
    title: "Canada Spouse & Family Sponsorship Visa",
    badge: "Family Reunification Priority",
    minPoints: "No Points Test Required",
    processingTime: "10 to 12 Months (Spousal Open Work Permit in 3–5 Months)",
    overview: "Reunite with your partner or family in Canada through Spousal, Common-Law Partner, or Dependent Child Sponsorship. Canadian citizens and permanent residents can sponsor their spouse from India while also applying for an Open Work Permit once the application receives Acknowledgement of Receipt (AOR).",
    highlights: [
      "No IELTS or points test required for the sponsored spouse",
      "Eligible for Spousal Open Work Permit (SOWP) while PR processes",
      "Comprehensive relationship proof & dossier preparation to prevent refusals",
      "Dedicated interview preparation and GCMS note tracking"
    ],
    requirements: [
      "Sponsor must be a Canadian Citizen or Permanent Resident aged 18+",
      "Genuine, legally valid marriage certificate and comprehensive relationship evidence",
      "Sponsor must not be receiving social assistance (other than disability)",
      "Medical examination and Police Clearance Certificate (PCC) for applicant"
    ]
  },
  "canada-super-visa": {
    country: "Canada",
    flag: "🇨🇦",
    title: "Apply for Canada Super Visa from India 2026",
    badge: "Stay Up to 5–7 Years Per Entry",
    minPoints: "Host Child/Grandchild Minimum Necessary Income (MNI)",
    processingTime: "45 to 90 Days",
    overview: "The Canada Super Visa is a multi-entry visa designed for parents and grandparents of Canadian citizens and permanent residents. Valid for up to 10 years, it allows parents to stay in Canada for up to 5 years at a time (with 2-year extensions) without renewing their status.",
    highlights: [
      "Multi-entry validity for up to 10 years with stays up to 5 continuous years",
      "Expert assistance with Canadian Medical Insurance compliance ($100,000+ coverage)",
      "Complete Notice of Assessment (NOA) & LICO income verification for host child",
      "Fast-track biometric scheduling and financial tie documentation"
    ],
    requirements: [
      "Be the parent or grandparent of a Canadian citizen or permanent resident",
      "Signed letter of invitation from your child or grandchild in Canada including financial support promise",
      "Proof of private medical insurance from a Canadian or approved international insurer (min $100,000 coverage for 1 year)",
      "Host child meets the Low-Income Cut-Off (LICO) minimum income threshold"
    ]
  },
  "canada-business": {
    country: "Canada",
    flag: "🇨🇦",
    title: "Canada Business & Start-Up Visa from India",
    badge: "Entrepreneur & Investor Route",
    minPoints: "Letter of Support / Provincial Entrepreneur Score",
    processingTime: "12 to 24 Months (Work Permit in 4–6 Months)",
    overview: "Designed for innovative entrepreneurs, business owners, and senior managers looking to establish or acquire a business in Canada. Includes the federal Start-Up Visa (SUV) program, Intra-Company Transfer (ICT) work permits, and Provincial Entrepreneur PNP streams.",
    highlights: [
      "Pathway to permanent residency for up to 5 co-founders under Start-Up Visa",
      "Fast-track C11 Entrepreneur & Intra-Company Transfer (ICT) Work Permits",
      "Complete business plan drafting, incubator pitching, and net-worth verification",
      "No upper age limit for business and investor pathways"
    ],
    requirements: [
      "Qualifying business concept or existing profitable enterprise in India",
      "CLB 5 in English or French for Start-Up Visa applicants",
      "Letter of Support from a designated Canadian venture capital fund, angel group, or business incubator",
      "Proof of transferable settlement and business investment funds"
    ]
  },
  "canada-visitor": {
    country: "Canada",
    flag: "🇨🇦",
    title: "Canadian Visitor & Tourist Visa (TRV) 2026",
    badge: "Up to 10-Year Multiple Entry",
    minPoints: "Strong Home-Country Ties & Financial Proof",
    processingTime: "20 to 45 Working Days",
    overview: "Travel to Canada for tourism, family visits, or short business conferences with our high-approval Temporary Resident Visa (TRV) filing service. We craft strong cover letters, day-by-day travel itineraries, and CA-certified net worth dossiers to overcome 216(1) refusal risks.",
    highlights: [
      "Specialized re-application support for previous Canada visitor visa refusals",
      "Detailed Purpose of Visit cover letter & CA valuation report guidance",
      "Complete family, tourist, and business visitor visa documentation",
      "Biometric appointment scheduling across VFS centers in Delhi NCR & Pan-India"
    ],
    requirements: [
      "Valid passport with at least 6 months validity",
      "Bank statements (last 6 months), ITRs (last 3 years), and proof of liquid funds",
      "Strong ties to India (employment NOC, business registration, property, or family ties)",
      "Confirmed travel itinerary or notarized invitation letter from Canadian host"
    ]
  },

  // AUSTRALIA PATHWAYS
  "australia-pr": {
    country: "Australia",
    flag: "🇦🇺",
    title: "Apply for Australia PR Visa from India (2026 Guide)",
    badge: "Direct Permanent Residency",
    minPoints: "Minimum 65 Points on SkillSelect Grid",
    processingTime: "6 to 11 Months",
    overview: "Australia's General Skilled Migration (GSM) program offers Indian professionals a clear, points-tested pathway to live and work permanently in Australia. Through SkillSelect, eligible applicants receive invitations for Subclass 189, Subclass 190, or Subclass 491 visas.",
    highlights: [
      "Full work and study rights across Australia with Medicare health coverage",
      "Expert Skills Assessment filing with ACS, Engineers Australia, VETASSESS, CPA, or ANMAC",
      "Strategic EOI submission across multiple Australian states to maximize invitation chances",
      "Pathway to Australian citizenship after 4 years of lawful residence (including 1 year as PR)"
    ],
    requirements: [
      "Age under 45 years at the time of Invitation to Apply",
      "Occupation listed on the Medium and Long-term Strategic Skills List (MLTSSL) or STSOL",
      "Positive Skills Assessment from the relevant Australian assessing authority",
      "Minimum Competent English (IELTS 6.0 or PTE 50 in each band) and 65+ SkillSelect points"
    ]
  },
  "australia-189": {
    country: "Australia",
    flag: "🇦🇺",
    title: "Australia Skilled Independent Visa (Subclass 189)",
    badge: "No State or Employer Sponsor Needed",
    minPoints: "65 Minimum (80–90+ Competitive depending on ANZSCO)",
    processingTime: "6 to 9 Months",
    overview: "The Subclass 189 Skilled Independent visa is a permanent residence visa for points-tested skilled workers who are not sponsored by an employer, state/territory government, or family member. Holders can live and work permanently anywhere in Australia.",
    highlights: [
      "Complete freedom to live, work, and study in Sydney, Melbourne, Brisbane, Perth, or anywhere in Australia",
      "Priority invitations for Healthcare, Teaching, Social Work, Engineering, and Construction trades",
      "Include spouse/partner and dependent children on the same PR application",
      "Sponsor eligible relatives for permanent residence once settled"
    ],
    requirements: [
      "Occupation must be on the Subclass 189 Skilled Occupation List (MLTSSL)",
      "Positive skills assessment prior to lodging Expression of Interest (EOI)",
      "Score at least 65 points on the Department of Home Affairs points test",
      "Meet health and character requirements"
    ]
  },
  "australia-190": {
    country: "Australia",
    flag: "🇦🇺",
    title: "Australia Skilled Nominated Visa (Subclass 190)",
    badge: "+5 State Nomination Points",
    minPoints: "65 Points (60 Own Points + 5 State Points)",
    processingTime: "7 to 10 Months",
    overview: "The Subclass 190 visa is a permanent residence visa for skilled workers nominated by an Australian State or Territory government (NSW, Victoria, Queensland, Western Australia, South Australia, ACT, Tasmania, or NT).",
    highlights: [
      "Awards 5 additional points toward your SkillSelect score upon state nomination",
      "Access to broader state occupation lists (STSOL + MLTSSL)",
      "Direct permanent residency from day one with full Medicare access",
      "Tailored ROI (Registration of Interest) filing for NSW, Victoria, WA, and SA"
    ],
    requirements: [
      "Occupation on the Combined Eligible Skilled Occupations list for Subclass 190",
      "Receive nomination from an Australian State or Territory agency",
      "Commit to living and working in the nominating state for the initial 2 years",
      "Positive skills assessment and minimum 65 total points (including 5 state points)"
    ]
  },
  "australia-491": {
    country: "Australia",
    flag: "🇦🇺",
    title: "Australia Skilled Work Regional Visa (Subclass 491)",
    badge: "+15 Regional Nomination Points",
    minPoints: "65 Points (50 Own Points + 15 Regional Points)",
    processingTime: "6 to 10 Months",
    overview: "The Subclass 491 visa is a 5-year provisional visa for skilled workers nominated by an Australian state/territory or sponsored by an eligible family member living in a designated regional area (which includes Perth, Adelaide, Gold Coast, Canberra, Newcastle, and Wollongong). Leads directly to Permanent Residency via Subclass 191 after 3 years.",
    highlights: [
      "Boosts your SkillSelect score by +15 points—ideal for applicants with 50–60 base points",
      "Covers major growth cities like Perth, Adelaide, Canberra, and Gold Coast as regional areas",
      "Clear pathway to Subclass 191 Permanent Residence after 3 years of regional residence",
      "Priority processing for regional applications"
    ],
    requirements: [
      "Nomination by a state/territory government or sponsorship by an eligible relative in regional Australia",
      "Occupation on the Regional Occupation List (ROL), STSOL, or MLTSSL",
      "Live, work, and study in a designated regional area of Australia",
      "Minimum 65 total points (including the 15 nomination points)"
    ]
  },
  "australia-186": {
    country: "Australia",
    flag: "🇦🇺",
    title: "Australia Employer Nomination Scheme (Subclass 186)",
    badge: "Employer-Sponsored PR",
    minPoints: "No Points Test (Employer Sponsored)",
    processingTime: "5 to 9 Months",
    overview: "The Subclass 186 Employer Nomination Scheme (ENS) enables Australian employers to sponsor skilled overseas workers for permanent residency under the Direct Entry stream, Temporary Residence Transition (TRT) stream, or Labour Agreement stream.",
    highlights: [
      "No SkillSelect points test required—based on an approved Australian job offer",
      "Direct Entry stream grants immediate Permanent Residency",
      "Comprehensive employer nomination & SBS compliance support",
      "Available for over 200+ skilled occupations under the Core Skills Occupation List"
    ],
    requirements: [
      "Nominated by an approved Australian employer within 6 months before applying",
      "At least 3 years of relevant skilled work experience (for Direct Entry stream)",
      "Positive skills assessment and Competent English (IELTS 6.0 / PTE 50)",
      "Under 45 years of age (unless exempt)"
    ]
  },
  "australia-tourist": {
    country: "Australia",
    flag: "🇦🇺",
    title: "Australia Tourist & Visitor Visa (Subclass 600) & Spouse Visa",
    badge: "Fast Digital ImmiAccount Filing",
    minPoints: "Genuine Visitor / Partner Evidence",
    processingTime: "15 to 30 Working Days (Subclass 600)",
    overview: "Whether you are visiting family and friends in Australia, exploring iconic destinations, or joining your spouse under the Partner Visa (Subclass 309/100), our case managers handle end-to-end ImmiAccount submission, Form 80/1229 compliance, and financial documentation.",
    highlights: [
      "100% paperless online ImmiAccount filing—no physical passport submission required",
      "Tourist stream, Sponsored Family stream, and Business Visitor stream expertise",
      "Dedicated Partner/Spouse Visa (Subclass 309/100) Four-Pillar relationship documentation",
      "High approval rate with structured financial & home-ties presentation"
    ],
    requirements: [
      "Valid passport, recent digital photograph, and national ID proofs",
      "6 months bank statements, ITRs, salary slips, or business registration proof",
      "Employer Leave Approval / NOC or business continuity proof",
      "Invitation letter and status proof if visiting family/relatives in Australia"
    ]
  },

  // EUROPE PATHWAYS
  "germany-opportunity-card": {
    country: "Europe",
    flag: "🇩🇪",
    title: "Germany Opportunity Card (Chancenkarte) from India 2026",
    badge: "No Job Offer Required • Work in Germany",
    minPoints: "Minimum 6 Points on Chancenkarte System (or Recognized Degree)",
    processingTime: "6 to 12 Weeks",
    overview: "The Germany Opportunity Card (Chancenkarte) is Germany's flagship points-based residence permit allowing non-EU skilled workers from India to enter Germany for up to 12 months (extendable up to 24 months) to search for full-time employment—without needing a prior job offer or employer sponsorship!",
    highlights: [
      "Enter Germany legally for 1 year without a prior job offer",
      "Right to work part-time up to 20 hours/week + 2-week paid trial jobs with German employers",
      "Instant conversion to an EU Blue Card or German Skilled Work Permit upon securing a job",
      "Complete ANABIN / ZAB degree recognition and Blocked Account (Sperrkonto) setup assistance"
    ],
    requirements: [
      "University degree or minimum 2-year vocational qualification recognized in India",
      "Basic German (A1) OR English proficiency at B2 level (IELTS 5.5–6.5 / PTE / TOEFL)",
      "Score at least 6 points (based on work experience, age under 35/40, language, and shortage occupation) OR hold a fully German-recognized degree",
      "Proof of financial self-sufficiency (~€1,027/month via Blocked Account or formal Declaration of Commitment)"
    ]
  },
  "germany-tourist": {
    country: "Europe",
    flag: "🇪🇺",
    title: "Germany & Schengen Tourist, Business & Work Visas 2026",
    badge: "Access 29 Schengen Countries",
    minPoints: "Confirmed Itinerary & Financial Sufficiency",
    processingTime: "15 Working Days after VFS Appointment",
    overview: "Travel across 29 European countries on a single Schengen Visa or pursue European work permits (including Spain Work Permits, EU Blue Cards, and European Student Visas). We manage VFS appointment booking, Schengen-compliant travel insurance, flight/hotel reservations, and cover letters.",
    highlights: [
      "Single visa grants seamless travel across Germany, France, Switzerland, Italy, Spain, and 24+ Schengen nations",
      "Priority VFS slot monitoring and complete dossier verification",
      "Specialized support for Spain Work Permits, EU Blue Cards, and European Study Visas",
      "Zero-defect documentation checklist tailored to Embassy of Germany in New Delhi"
    ],
    requirements: [
      "Valid passport with at least 2 blank pages and 3+ months validity beyond return date",
      "Schengen Travel Medical Insurance with minimum €30,000 coverage",
      "Confirmed round-trip flight itinerary, accommodation proof, and day-by-day travel plan",
      "Last 3–6 months bank statements, 3 years ITR, and employment/business proof"
    ]
  }
};

const CASE_STUDIES = [
  {
    id: "cs-1",
    country: "Australia",
    flag: "🇦🇺",
    subclass: "Subclass 190 PR Grant",
    occupation: "Software Engineer (ANZSCO 261313)",
    points: "90 Points (85 + 5 NSW State Nomination)",
    appDate: "14 Mar 2025",
    grantDate: "18 Jan 2026",
    clientInitials: "R. Sharma (Delhi NCR)",
    summary: "Completed ACS positive skills assessment within 6 weeks, optimized PTE Academic score to 79+ in all bands, secured New South Wales (NSW) Subclass 190 nomination, and achieved direct PR grant for the family of three."
  },
  {
    id: "cs-2",
    country: "Australia",
    flag: "🇦🇺",
    subclass: "Subclass 189 PR Grant",
    occupation: "Telecommunications Network Planner (ANZSCO 313213)",
    points: "85 Points (Independent Stream)",
    appDate: "09 Apr 2025",
    grantDate: "12 Feb 2026",
    clientInitials: "A. Verma (Noida)",
    summary: "Guided through Engineers Australia Competency Demonstration Report (CDR) preparation with zero modifications requested. Invited in federal SkillSelect round and granted unconditional permanent residency."
  },
  {
    id: "cs-3",
    country: "Canada",
    flag: "🇨🇦",
    subclass: "Express Entry STEM Draw + OINP",
    occupation: "Data Scientist / BI Analyst (NOC 21211)",
    points: "CRS 498 (Direct STEM Category ITA)",
    appDate: "22 Aug 2025",
    grantDate: "04 Mar 2026",
    clientInitials: "K. Malhotra (Gurugram)",
    summary: "Evaluated Master's credentials via WES, coached applicant from CLB 7 to CLB 9 in IELTS General, and secured e-COPR in 6.5 months with full post-landing settlement support in Toronto."
  },
  {
    id: "cs-4",
    country: "Australia",
    flag: "🇦🇺",
    subclass: "Subclass 491 Regional PR Pathway",
    occupation: "Chef / Hospitality Manager (ANZSCO 351311)",
    points: "80 Points (65 Base + 15 Regional Nomination)",
    appDate: "19 Jun 2025",
    grantDate: "28 Mar 2026",
    clientInitials: "S. Singh (Chandigarh)",
    summary: "Completed VETASSESS trade assessment with comprehensive employment verification and secured South Australia regional nomination."
  },
  {
    id: "cs-5",
    country: "Europe",
    flag: "🇩🇪",
    subclass: "Germany Opportunity Card (Chancenkarte)",
    occupation: "Mechanical Design Engineer",
    points: "8 / 6 Chancenkarte Points + ANABIN H+ Match",
    appDate: "10 Jan 2026",
    grantDate: "19 Mar 2026",
    clientInitials: "P. Nair (New Delhi)",
    summary: "Verified university degree on ANABIN database (H+ status), arranged Expatrio blocked account, and obtained 1-year Chancenkarte visa in 9 weeks from New Delhi Embassy."
  },
  {
    id: "cs-6",
    country: "Canada",
    flag: "🇨🇦",
    subclass: "Canada Outland Spousal Sponsorship + SOWP",
    occupation: "Family Sponsorship Stream",
    points: "Approved in 9.5 Months",
    appDate: "05 May 2025",
    grantDate: "20 Feb 2026",
    clientInitials: "M. Choudhary & Spouse (Delhi)",
    summary: "Compiled a 95-page relationship dossier, secured Spousal Open Work Permit in 14 weeks after AOR, and finalized PR confirmation without an interview."
  }
];

const BLOG_POSTS = [
  {
    id: "blog-1",
    title: "How to Immigrate to Australia as a Social Worker in 2026?",
    date: "08 Sep 2026",
    category: "Immigrate Australia",
    readTime: "5 min read",
    excerpt: "Social Workers (ANZSCO 272511) remain on Australia's top priority occupation list with invitations issued at just 65 to 70 points under Subclass 189 and 190.",
    content: "Australia faces a critical nationwide shortage of qualified Social Workers (ANZSCO 272511), making it one of the fastest pathways to Australian Permanent Residency in 2026. In recent SkillSelect invitation rounds, healthcare and social service professionals received Subclass 189 invitations at the minimum 65-point threshold.\n\nKey Steps to Apply:\n1. AASW Skills Assessment: Complete your academic and supervised field placement verification through the Australian Association of Social Workers (AASW).\n2. English Proficiency: Achieve IELTS Academic 7.0 in all four bands (or equivalent where accepted by AASW criteria).\n3. Lodge EOI on SkillSelect: Target Subclass 189 (Independent), Subclass 190 (State Nominated in NSW, VIC, WA, SA), and Subclass 491.\n\nOur case managers at Viraj Immigration Pvt Ltd review your university transcripts and field placement hours before filing to ensure a 100% positive AASW outcome."
  },
  {
    id: "blog-2",
    title: "6 Simple Steps to Apply for a Canadian Work Permit from India",
    date: "01 Sep 2026",
    category: "Immigrate Canada",
    readTime: "6 min read",
    excerpt: "From LMIA verification and NOC TEER code matching to biometrics and port-of-entry approval, here is the complete step-by-step roadmap for Indian professionals.",
    content: "Securing a Canadian Work Permit from India gives you valuable Canadian work experience that significantly boosts your Express Entry CRS score under the Canadian Experience Class (CEC).\n\nThe 6 Essential Steps:\n1. Identify the Right Stream: Determine whether you qualify for an Employer-Specific Work Permit (LMIA-backed), Intra-Company Transfer (ICT), or Open Work Permit (Spousal/PGWP).\n2. Verify NOC 2021 TEER Code: Ensure your job duties match the National Occupational Classification (TEER 0–5) listed on the job offer.\n3. Obtain Positive LMIA or Exemption Code: Your Canadian employer secures a Labour Market Impact Assessment from ESDC.\n4. Prepare Financial & Experience Dossier: Gather reference letters, salary slips, Form 16/ITRs, and police clearance certificates.\n5. Submit Online via IRCC Portal & Complete Biometrics: Book your VFS appointment in New Delhi, Jalandhar, Chandigarh, or Mumbai.\n6. Medical Exam & Passport Request (PPR): Complete your panel physician medical exam and receive your Port of Entry (POE) Letter of Introduction."
  },
  {
    id: "blog-3",
    title: "Canada PR for Low & Semi-Skilled Workers: Pathways for TEER 4 & 5",
    date: "24 Aug 2026",
    category: "Immigrate Canada",
    readTime: "5 min read",
    excerpt: "Explore Provincial Nominee Programs (PNP), Atlantic Immigration Program (AIP), and Rural Community Immigration pilots designed for TEER 4 and TEER 5 occupations.",
    content: "Many applicants assume Canada PR is limited to software engineers and executives. In reality, several Canadian provinces actively nominate workers in TEER 4 and TEER 5 roles—including transport truck drivers, food & beverage servers, healthcare support aides, agricultural workers, and hospitality staff.\n\nTop Pathways in 2026:\n• Provincial Nominee Programs (PNP): BC PNP Entry Level & Semi-Skilled (ELSS), SINP Hard-to-Fill Skills Pilot, and OINP Employer Job Offer: In-Demand Skills Stream.\n• Atlantic Immigration Program (AIP): Permanent residency pathway across Nova Scotia, New Brunswick, PEI, and Newfoundland & Labrador with CLB 4 language requirements.\n• Rural & Francophone Community Pilots: Direct PR options for candidates willing to work and settle in designated growing communities."
  },
  {
    id: "blog-4",
    title: "How to Apply for Canada PR in 2026: Eligibility, Express Entry & PNP",
    date: "10 Aug 2026",
    category: "Immigrate Canada",
    readTime: "7 min read",
    excerpt: "A complete breakdown of the 67-point FSW eligibility grid, 2026 category-based Express Entry draws, and how to boost your CRS score above cutoff.",
    content: "Canada's Immigration Levels Plan continues to prioritize economic permanent residents through Express Entry and Provincial Nominee Programs (PNP).\n\nStep-by-Step 2026 Process:\n1. Check Your 67-Point Eligibility: Score at least 67 out of 100 across Age (max 12), Education (max 25), Work Experience (max 15), Language (max 28), Arranged Employment (max 10), and Adaptability (max 10).\n2. Complete ECA & Language Tests: Obtain your WES evaluation and aim for CLB 9+ (IELTS 8 in Listening, 7 in Reading, Writing, Speaking) to unlock up to 50–100 extra skill transferability points.\n3. Leverage Category-Based Selection: If you work in Healthcare, STEM, Trades, Agriculture, or speak French (NCLC 7+), you can receive an ITA at significantly lower CRS cutoffs.\n4. Apply for Provincial Nomination (+600 Points): Submit parallel EOIs in Ontario, Saskatchewan, or Alberta."
  },
  {
    id: "blog-5",
    title: "Best Australian States for Skilled Migration: A Guide for Indian Professionals",
    date: "10 Aug 2026",
    category: "Immigrate Australia",
    readTime: "6 min read",
    excerpt: "Compare Subclass 190 and 491 state nomination criteria across New South Wales, Victoria, Western Australia, South Australia, and Queensland.",
    content: "Choosing the right Australian state for your Subclass 190 (+5 points) or Subclass 491 (+15 points) nomination can cut your waiting time in half.\n\nState-by-State Breakdown for Offshore Applicants:\n• New South Wales (NSW): Targets ICT, engineering, construction, healthcare, and education professionals through targeted ROI rounds.\n• Victoria (VIC): Strong focus on digital economy, healthcare, social services, and renewable energy specialists.\n• Western Australia (WA): Waives the application fee for state nomination and offers generous allocations for building, construction, hospitality, and engineering occupations.\n• South Australia (SA): Ideal for regional Subclass 491 applicants with competitive points and offshore experience."
  },
  {
    id: "blog-6",
    title: "Germany Opportunity Card (Chancenkarte) 2026: Eligibility & 6-Point Calculator",
    date: "08 Aug 2026",
    category: "Immigrate Germany",
    readTime: "5 min read",
    excerpt: "Learn how Indian graduates and experienced professionals can move to Germany for 12 months without a prior job offer under the Chancenkarte scheme.",
    content: "Germany's Opportunity Card (Chancenkarte) has quickly become the #1 European migration pathway for Indian IT engineers, mechanical specialists, and finance professionals.\n\nHow the Points System Works (Minimum 6 Points Required):\n• 4 Points: Partial recognition of foreign qualification or regulated profession permission.\n• 3 Points: 5+ years of professional experience in the last 7 years OR German language proficiency at B2 level.\n• 2 Points: 2+ years of professional experience in the last 5 years OR Age under 35 years OR German at B1 level.\n• 1 Point: Age between 35–40 years OR C1 English proficiency OR Qualification in a German Shortage Occupation (Mangelberufe: IT, Engineering, Healthcare, Green Tech) OR Applying together with a spouse who also qualifies."
  }
];

const TESTIMONIALS = [
  {
    name: "M Rupa",
    location: "New Delhi",
    visa: "Canada PR (Express Entry)",
    rating: 5,
    quote: "I had an outstanding experience with Viraj Immigration Pvt Ltd. Their team is highly professional and knowledgeable, providing exceptional guidance throughout the entire immigration process. They are always available to answer my queries and provided clear, detailed information at each step. A special thanks to Gurpreet Sir & Ms. Nikita for their support & guidance."
  },
  {
    name: "Sudha Bhasin",
    location: "Delhi NCR",
    visa: "Australia Visitor Visa (Subclass 600)",
    rating: 5,
    quote: "I had recently applied for my visa through Viraj Immigration Pvt Ltd and I'm very grateful to Ms. Nikita who was handling my visa process for her patience, accurate documentation checklist, and constant support."
  },
  {
    name: "Nirukti Chandra",
    location: "Noida",
    visa: "Australia Skilled Nominated (Subclass 190)",
    rating: 5,
    quote: "I recently completed my visa application stage with VIRAJ IMMIGRATION PVT LTD, and I'm very pleased with the experience. From the initial consultation, their team demonstrated professionalism, transparency, and a deep understanding of immigration procedures. They clearly explained each step, provided a realistic timeline, and helped ensure all my documents were in order."
  },
  {
    name: "Gaurav Gulati",
    location: "Gurugram",
    visa: "Europe Work Permit & Skilled Migration",
    rating: 5,
    quote: "Viraj Immigration Pvt Ltd is a 100% trustable consultant with deep expertise in the migration process and work permits. Especially the case handlers' response time is very quick to resolve any sort of issues in the process. Once again appreciate and respect to Gurpreet Sir. Applause to the entire team!"
  },
  {
    name: "Neeru Dutta",
    location: "New Delhi",
    visa: "Canada Super Visa",
    rating: 5,
    quote: "I would like to thank Viraj Immigration Pvt Ltd for their transparent services and continued support throughout my visa filing and biometric scheduling process."
  },
  {
    name: "Dinesh Chauhan",
    location: "Faridabad",
    visa: "Canada PNP Pathway",
    rating: 5,
    quote: "I am utterly satisfied with the services of Viraj Immigration Pvt Ltd and especially would like to thank Nikita and the documentation team for their efficiency and zero-error submission."
  },
  {
    name: "Guneet Anand",
    location: "Ferozepur, Punjab",
    visa: "Australia Subclass 491 PR",
    rating: 5,
    quote: "Viraj Immigration Pvt Ltd provided exceptional immigration services with professionalism, transparency, and constant support. Their team guided me through each step with clarity and care, making the entire process smooth and stress-free. Communication was prompt and accurate."
  },
  {
    name: "Megha Sethi",
    location: "South Delhi",
    visa: "Germany Opportunity Card",
    rating: 5,
    quote: "I had an excellent experience with VIRAJ IMMIGRATION PVT LTD. Mr. Gurpreet (the founder of the company) and his entire team helped me from gathering ANABIN documents to submitting my application and preparing for the embassy appointment. What truly stood out was their attention to detail."
  }
];

const FAQS = [
  {
    q: "Who is the best immigration consultant in Delhi?",
    a: "The best immigration consultant in Delhi offers transparent eligibility advice, proven visa approval rates, and dedicated case management for PR, work, and study visas. Viraj Immigration Pvt Ltd in Nehru Place, New Delhi is trusted across India for Canada PR, Australia PR, and Germany Opportunity Card applications, providing end-to-end documentation and zero-defect case handling."
  },
  {
    q: "How can an immigration consultant help me get Canada PR?",
    a: "A professional immigration consultant evaluates your profile under the 67-point FSW grid, calculates and optimizes your CRS score, guides your WES/ECA credential evaluation, and identifies the highest-probability Provincial Nominee Program (PNP) or Category-Based Express Entry draw so your application is submitted accurately without refusal risks."
  },
  {
    q: "Which consultancy is best for Australian PR in Delhi?",
    a: "Australian PR requires precise ANZSCO occupation selection, a positive Skills Assessment (ACS, Engineers Australia, VETASSESS, AASW), and strategic State Nomination (Subclass 190/491) filing. Viraj Immigration Pvt Ltd specializes in Australian GSM pathways with dedicated MARA-aligned documentation workflows."
  },
  {
    q: "What is the Germany Opportunity Card (Chancenkarte) and do I need a job offer?",
    a: "No job offer is required! The Germany Opportunity Card allows Indian graduates and skilled workers who score at least 6 points (or hold a German-recognized degree) to move to Germany for up to 12 months to search for full-time employment while working part-time up to 20 hours per week."
  },
  {
    q: "How do I choose a reliable visa consultancy in Nehru Place, Delhi?",
    a: "Always check for a written retainer agreement, a realistic profile assessment before paying full fees, dedicated case manager assignment, and verified client testimonials. At Viraj Immigration Pvt Ltd (10th Floor, Devika Tower, Nehru Place), every client starts with a free eligibility evaluation report."
  },
  {
    q: "What services are provided by Viraj Immigration Pvt Ltd?",
    a: "We provide end-to-end assistance including Free Profile Assessment, Skills Assessment & ECA filing, Express Entry & SkillSelect EOI management, Provincial/State Nomination (PNP & Subclass 190/491), Spouse & Family Sponsorship, Super Visas, Germany Opportunity Cards, Tourist/Visitor Visas, SOP/Cover Letter drafting, and Post-Landing Assistance."
  }
];

const REELS_DATA = [
  {
    id: "reel-1",
    tag: "🇨🇦 Canada PR Update",
    icon: "🍁",
    title: "Check Your Canada PR Eligibility in 60 Seconds!",
    views: "38.2K Views",
    duration: "0:48",
    desc: "Senior Case Manager breakdown of the 67-Point Federal Skilled Worker grid and how to boost your CRS score by +600 points via PNP nominations."
  },
  {
    id: "reel-2",
    tag: "🇦🇺 Australia PR Grant",
    icon: "🦘",
    title: "Double Delight: Subclass 189 & 190 PR Visas Granted!",
    views: "42.9K Views",
    duration: "0:55",
    desc: "Celebrating our clients' direct Australia PR grants for Software Engineer (90 Pts) and Telecommunications Network Planner (85 Pts)."
  },
  {
    id: "reel-3",
    tag: "🇩🇪 Europe Pathway",
    icon: "🇩🇪",
    title: "Germany Opportunity Card 2026: Move Without a Job Offer",
    views: "51.4K Views",
    duration: "1:02",
    desc: "Complete step-by-step guide to scoring 6+ points on the German Chancenkarte, ANABIN H+ university check, and part-time work rights."
  },
  {
    id: "reel-4",
    tag: "🏆 Team Celebration",
    icon: "🎉",
    title: "Viraj Immigration Pvt Ltd Rewards & Recognition (R&R) 2026",
    views: "29.8K Views",
    duration: "0:45",
    desc: "Behind every successful visa approval is a dedicated team! Celebrating our senior immigration consultants at Devika Tower, Nehru Place."
  },
  {
    id: "reel-5",
    tag: "💑 Family Reunification",
    icon: "❤️",
    title: "Canada Outland Spousal Sponsorship + Open Work Permit",
    views: "33.1K Views",
    duration: "0:52",
    desc: "How our Mission Zero Defect documentation checklist helps couples reunite in Canada with zero interview delays."
  },
  {
    id: "reel-6",
    tag: "✈️ Visitor & Super Visa",
    icon: "🛂",
    title: "Overcoming 216(1) Tourist Visa Refusals from India",
    views: "47.0K Views",
    duration: "0:58",
    desc: "Essential CA net-worth, strong home-ties, and day-by-day itinerary tips for Canadian, Australian & Schengen tourist visas."
  }
];

const ACHIEVEMENTS_DATA = [
  {
    badge: "📰 Republic News India Feature",
    title: "Viraj Immigration Pvt Ltd Turns Immigration Dreams into Global Success Stories",
    date: "National Media Spotlight",
    desc: "Featured in Republic News India, Dailyhunt & NewsTrackPlus for transforming how Indian professionals migrate to Canada, Australia, and Europe under Founder Gurpreet Singh."
  },
  {
    badge: "🏆 International Fame Award",
    title: "Honored as Best Immigration Consultants of India (IFA)",
    date: "Mission Zero Defect Recognition",
    desc: "Awarded for 100% process transparency, ethical eligibility assessments, and industry-leading PR visa approval rates in Delhi NCR."
  },
  {
    badge: "🌟 Global Legacy Awards 2025–2026",
    title: "Best Immigration Advisor Nomination & 4.8★ Public Rating",
    date: "122+ Verified Client Reviews",
    desc: "Recognized for excellence in Australia SkillSelect (Subclass 189/190/491) and Canada Express Entry & PNP case management."
  },
  {
    badge: "🇦🇺 Subclass 190 & 189 PR Milestone",
    title: "500+ Australian General Skilled Migration (GSM) Approvals",
    date: "ACS • Engineers Australia • VETASSESS",
    desc: "Consistent positive skills assessment outcomes and fast-tracked state nominations across NSW, Victoria, Western Australia, and South Australia."
  },
  {
    badge: "🇨🇦 Express Entry & PNP Record",
    title: "+600 CRS Provincial Nomination Success Across 6 Provinces",
    date: "OINP • SINP • BCPNP • AAIP",
    desc: "Helping applicants with CRS scores between 380–470 secure guaranteed Invitations to Apply (ITA) through targeted provincial streams."
  },
  {
    badge: "🇩🇪 Germany Chancenkarte Pioneer",
    title: "98% Approval Rate on Germany Opportunity Card Filings",
    date: "New Delhi Embassy Dossier Experts",
    desc: "Complete ANABIN H+ verification, ZAB statement of comparability, and Sperrkonto blocked account guidance for Indian engineers & graduates."
  }
];

// Global App State & Carousel Indices
let currentView = "home";
let activeCalcTab = "canada";
let caseStudyFilter = "All";
let blogCategoryFilter = "All";

let heroSlideIndex = 0;
let heroIntervalId = null;
let heroPaused = false;

let blogCarouselPage = 0;
let reelsCarouselPage = 0;
let achievementsCarouselPage = 0;
let testimonialCarouselPage = 0;

// Navigation & View Switching
function switchView(viewName, scrollTargetId) {
  currentView = viewName;
  const views = ["home", "calculators", "pathway", "about", "cases", "testimonials", "blogs", "faqs", "contact"];
  views.forEach(v => {
    const el = document.getElementById("view-" + v);
    if (el) {
      if (v === viewName) {
        el.classList.remove("hidden");
      } else {
        el.classList.add("hidden");
      }
    }
  });

  // Update active nav styling
  document.querySelectorAll("[data-nav-view]").forEach(btn => {
    if (btn.getAttribute("data-nav-view") === viewName) {
      btn.classList.add("text-[#0b1f3a]", "font-bold");
    } else {
      btn.classList.remove("text-[#0b1f3a]", "font-bold");
    }
  });

  // Close mobile menu if open
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) mobileMenu.classList.add("hidden");

  if (scrollTargetId) {
    setTimeout(() => {
      const target = document.getElementById(scrollTargetId);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function openPathwayDetail(pathwayKey) {
  const data = VISA_PATHWAYS[pathwayKey];
  if (!data) return;

  document.getElementById("pw-flag").textContent = data.flag;
  document.getElementById("pw-country").textContent = data.country + " Immigration Pathway";
  document.getElementById("pw-title").textContent = data.title;
  document.getElementById("pw-badge").textContent = data.badge;
  document.getElementById("pw-points").textContent = data.minPoints;
  document.getElementById("pw-time").textContent = data.processingTime;
  document.getElementById("pw-overview").textContent = data.overview;

  const hlList = document.getElementById("pw-highlights");
  hlList.innerHTML = data.highlights.map(item => `
    <li class="flex items-start gap-3">
      <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
      <span class="text-slate-700 text-sm leading-relaxed">${item}</span>
    </li>
  `).join("");

  const reqList = document.getElementById("pw-requirements");
  reqList.innerHTML = data.requirements.map((item, idx) => `
    <li class="flex items-start gap-3">
      <span class="mt-0.5 flex-shrink-0 w-6 h-6 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-bold">${idx + 1}</span>
      <span class="text-slate-700 text-sm leading-relaxed">${item}</span>
    </li>
  `).join("");

  switchView("pathway");
}

function openCalculator(calcType) {
  switchView("calculators");
  setCalculatorTab(calcType || "canada");
}

function setCalculatorTab(calcType) {
  activeCalcTab = calcType;
  ["canada", "australia", "germany"].forEach(tab => {
    const panel = document.getElementById("calc-panel-" + tab);
    const btn = document.getElementById("calc-tab-btn-" + tab);
    if (panel) panel.classList.toggle("hidden", tab !== calcType);
    if (btn) {
      if (tab === calcType) {
        btn.className = "px-5 py-3 rounded-xl font-bold text-sm transition-all bg-red-600 text-white shadow-md";
      } else {
        btn.className = "px-5 py-3 rounded-xl font-bold text-sm transition-all bg-white text-slate-700 hover:bg-slate-100 border border-slate-200";
      }
    }
  });
  calculateCanadaPoints();
  calculateAustraliaPoints();
  calculateGermanyPoints();
}

// 1. CANADA 67-POINT & CRS CALCULATOR
function calculateCanadaPoints() {
  const age = parseInt(document.getElementById("ca-age")?.value || "12", 10);
  const edu = parseInt(document.getElementById("ca-edu")?.value || "23", 10);
  const exp = parseInt(document.getElementById("ca-exp")?.value || "13", 10);
  const lang = parseInt(document.getElementById("ca-lang")?.value || "24", 10);
  const job = parseInt(document.getElementById("ca-job")?.value || "0", 10);
  const adapt = parseInt(document.getElementById("ca-adapt")?.value || "5", 10);

  const fswTotal = age + edu + exp + lang + job + adapt;
  // Estimate CRS score based on FSW factors
  const estCrs = Math.min(600, Math.round(fswTotal * 5.8 + (lang >= 24 ? 48 : 15) + (edu >= 23 ? 35 : 10) + (job === 10 ? 50 : 0)));

  const scoreEl = document.getElementById("ca-score-val");
  const crsEl = document.getElementById("ca-crs-val");
  const statusEl = document.getElementById("ca-status-badge");
  const recEl = document.getElementById("ca-recommendation");

  if (scoreEl) scoreEl.textContent = fswTotal + " / 100";
  if (crsEl) crsEl.textContent = "~" + estCrs;

  if (statusEl && recEl) {
    if (fswTotal >= 67) {
      statusEl.className = "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800";
      statusEl.textContent = "✓ Eligible for Express Entry FSW Pool (67+ Points Met)";
      recEl.textContent = estCrs >= 490
        ? "Strong profile for direct Federal Express Entry ITA! We recommend immediate WES ECA & Express Entry profile creation."
        : "You qualify for the Express Entry pool! Pairing your profile with a Provincial Nominee Program (PNP +600 CRS points) will guarantee your invitation.";
    } else {
      statusEl.className = "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800";
      statusEl.textContent = "Needs " + (67 - fswTotal) + " More Points for FSW (PNP Still Available)";
      recEl.textContent = "You are currently " + (67 - fswTotal) + " points short of the 67-point FSW threshold. Improving your IELTS to CLB 9 or applying via SINP/OINP Employer Streams can qualify your profile.";
    }
  }
}

// 2. AUSTRALIA 65-POINT CALCULATOR
function calculateAustraliaPoints() {
  const age = parseInt(document.getElementById("au-age")?.value || "30", 10);
  const eng = parseInt(document.getElementById("au-eng")?.value || "20", 10);
  const exp = parseInt(document.getElementById("au-exp")?.value || "10", 10);
  const edu = parseInt(document.getElementById("au-edu")?.value || "15", 10);
  const partner = parseInt(document.getElementById("au-partner")?.value || "10", 10);
  const nomination = parseInt(document.getElementById("au-nom")?.value || "5", 10);

  const total = age + eng + exp + edu + partner + nomination;
  const scoreEl = document.getElementById("au-score-val");
  const statusEl = document.getElementById("au-status-badge");
  const recEl = document.getElementById("au-recommendation");

  if (scoreEl) scoreEl.textContent = total + " Points";
  if (statusEl && recEl) {
    if (total >= 80) {
      statusEl.className = "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800";
      statusEl.textContent = "✓ High Invitation Probability (Subclass 189 / 190 / 491)";
      recEl.textContent = "With " + total + " points, your profile is highly competitive for both Skilled Independent (Subclass 189) and State Nominated (Subclass 190) direct PR visas.";
    } else if (total >= 65) {
      statusEl.className = "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800";
      statusEl.textContent = "✓ Qualifies for SkillSelect Pool (65+ Minimum Met)";
      recEl.textContent = "You meet the 65-point minimum threshold! We recommend lodging State ROIs for Subclass 190 (+5 pts) and Subclass 491 (+15 pts) across NSW, VIC, WA, and SA.";
    } else {
      statusEl.className = "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800";
      statusEl.textContent = "Needs " + (65 - total) + " More Points to Reach 65";
      recEl.textContent = "Switching to Subclass 491 Regional Nomination (+15 points) or achieving Superior English in PTE/IELTS (+20 points) will easily push you above 65 points.";
    }
  }
}

// 3. GERMANY OPPORTUNITY CARD (CHANCENKARTE) 6-POINT CALCULATOR
function calculateGermanyPoints() {
  const qual = parseInt(document.getElementById("de-qual")?.value || "4", 10);
  const exp = parseInt(document.getElementById("de-exp")?.value || "3", 10);
  const lang = parseInt(document.getElementById("de-lang")?.value || "1", 10);
  const age = parseInt(document.getElementById("de-age")?.value || "2", 10);
  const shortage = parseInt(document.getElementById("de-shortage")?.value || "1", 10);

  const total = qual + exp + lang + age + shortage;
  const scoreEl = document.getElementById("de-score-val");
  const statusEl = document.getElementById("de-status-badge");
  const recEl = document.getElementById("de-recommendation");

  if (scoreEl) scoreEl.textContent = total + " Points";
  if (statusEl && recEl) {
    if (total >= 6) {
      statusEl.className = "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800";
      statusEl.textContent = "✓ Eligible for Germany Opportunity Card (6+ Points Met)";
      recEl.textContent = "Congratulations! With " + total + " points, you qualify for the 12-month Germany Opportunity Card without needing a prior job offer.";
    } else {
      statusEl.className = "inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800";
      statusEl.textContent = "Needs " + (6 - total) + " More Point(s) (Or Direct H+ Degree Route)";
      recEl.textContent = "Note: If your Indian bachelor's/master's degree and university are listed as H+ on Germany's ANABIN database, you automatically qualify without needing the 6-point test!";
    }
  }
}

// Render Case Studies
function renderCaseStudies(filterCountry) {
  caseStudyFilter = filterCountry || "All";
  const container = document.getElementById("case-studies-grid");
  if (!container) return;

  document.querySelectorAll("[data-cs-filter]").forEach(btn => {
    const val = btn.getAttribute("data-cs-filter");
    if (val === caseStudyFilter) {
      btn.className = "px-4 py-2 rounded-lg text-xs font-bold bg-red-600 text-white shadow-sm";
    } else {
      btn.className = "px-4 py-2 rounded-lg text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50";
    }
  });

  const filtered = caseStudyFilter === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.country === caseStudyFilter);

  container.innerHTML = filtered.map(c => `
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm visa-card flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-900 text-white">
            <span>${c.flag}</span> ${c.subclass}
          </span>
          <span class="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            ✓ Visa Granted
          </span>
        </div>
        <h3 class="text-lg font-bold text-slate-900 mb-1">${c.occupation}</h3>
        <p class="text-xs font-semibold text-black600 mb-3">${c.points}</p>
        <p class="text-sm text-slate-600 leading-relaxed mb-4">${c.summary}</p>
      </div>
      <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div><span class="font-semibold text-slate-700">Applicant:</span> ${c.clientInitials}</div>
        <div><span class="font-semibold text-slate-700">Granted:</span> ${c.grantDate}</div>
      </div>
    </div>
  `).join("");
}

// Render Blogs
function renderBlogs(category) {
  blogCategoryFilter = category || "All";
  const container = document.getElementById("blogs-grid");
  const homeContainer = document.getElementById("home-blogs-grid");

  document.querySelectorAll("[data-blog-filter]").forEach(btn => {
    const val = btn.getAttribute("data-blog-filter");
    if (val === blogCategoryFilter) {
      btn.className = "px-4 py-2 rounded-lg text-xs font-bold bg-red-600 text-white shadow-sm";
    } else {
      btn.className = "px-4 py-2 rounded-lg text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50";
    }
  });

  const filtered = blogCategoryFilter === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(b => b.category === blogCategoryFilter);

  const cardHtml = (b) => `
    <article class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm visa-card flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between text-xs text-slate-500 mb-3">
          <span class="px-2.5 py-1 rounded-md bg-red-50 text-black700 font-bold">${b.category}</span>
          <span>${b.date} • ${b.readTime}</span>
        </div>
        <h3 class="text-base font-bold text-slate-900 mb-2 leading-snug">${b.title}</h3>
        <p class="text-sm text-slate-600 leading-relaxed mb-4">${b.excerpt}</p>
      </div>
      <button type="button" onclick="openBlogModal('${b.id}')" class="inline-flex items-center gap-1.5 text-xs font-bold text-black600 hover:text-black700">
        Read Full Guide <span>→</span>
      </button>
    </article>
  `;

  if (container) container.innerHTML = filtered.map(cardHtml).join("");
  renderHomeBlogCarousel();
}

function renderHomeBlogCarousel() {
  const homeContainer = document.getElementById("home-blogs-grid");
  const indicator = document.getElementById("blog-carousel-indicator");
  if (!homeContainer) return;
  const pageSize = 3;
  const totalPages = Math.ceil(BLOG_POSTS.length / pageSize);
  if (blogCarouselPage >= totalPages) blogCarouselPage = 0;
  if (blogCarouselPage < 0) blogCarouselPage = totalPages - 1;
  const start = blogCarouselPage * pageSize;
  const slice = BLOG_POSTS.slice(start, start + pageSize);
  homeContainer.innerHTML = slice.map(b => `
    <article class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm visa-card flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between text-xs text-slate-500 mb-3">
          <span class="px-2.5 py-1 rounded-md bg-red-50 text-black700 font-bold">${b.category}</span>
          <span>${b.date} • ${b.readTime}</span>
        </div>
        <h3 class="text-base font-bold text-slate-900 mb-2 leading-snug">${b.title}</h3>
        <p class="text-sm text-slate-600 leading-relaxed mb-4">${b.excerpt}</p>
      </div>
      <button type="button" onclick="openBlogModal('${b.id}')" class="inline-flex items-center gap-1.5 text-xs font-bold text-black600 hover:text-black700">
        Read Full Guide <span>→</span>
      </button>
    </article>
  `).join("");
  if (indicator) indicator.textContent = (blogCarouselPage + 1) + " / " + totalPages;
}

function shiftBlogCarousel(delta) {
  blogCarouselPage += delta;
  renderHomeBlogCarousel();
}

function openBlogModal(blogId) {
  const post = BLOG_POSTS.find(b => b.id === blogId);
  if (!post) return;
  document.getElementById("blog-modal-category").textContent = post.category + " • " + post.date;
  document.getElementById("blog-modal-title").textContent = post.title;
  document.getElementById("blog-modal-body").innerHTML = post.content
    .split("\n\n")
    .map(p => `<p class="mb-3 text-slate-700 leading-relaxed whitespace-pre-line">${p}</p>`)
    .join("");
  document.getElementById("blog-modal").classList.remove("hidden");
}

function closeBlogModal() {
  document.getElementById("blog-modal").classList.add("hidden");
}

// Render Testimonials
function renderTestimonials() {
  const homeGrid = document.getElementById("home-testimonials-grid");
  const fullGrid = document.getElementById("full-testimonials-grid");

  const buildCard = (t) => `
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <div class="text-amber-400 text-sm tracking-wider">★★★★★</div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">${t.visa}</span>
        </div>
        <p class="text-sm text-slate-700 italic leading-relaxed mb-4">"${t.quote}"</p>
      </div>
      <div class="flex items-center gap-3 pt-3 border-t border-slate-100">
        <div class="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
          ${t.name.charAt(0)}
        </div>
        <div>
          <div class="text-sm font-bold text-slate-900">${t.name}</div>
          <div class="text-xs text-slate-500">${t.location} • Verified Client</div>
        </div>
      </div>
    </div>
  `;

  if (fullGrid) fullGrid.innerHTML = TESTIMONIALS.map(buildCard).join("");
  renderHomeTestimonialCarousel();
}

function renderHomeTestimonialCarousel() {
  const homeGrid = document.getElementById("home-testimonials-grid");
  const indicator = document.getElementById("testimonial-carousel-indicator");
  if (!homeGrid) return;
  const pageSize = 4;
  const totalPages = Math.ceil(TESTIMONIALS.length / pageSize);
  if (testimonialCarouselPage >= totalPages) testimonialCarouselPage = 0;
  if (testimonialCarouselPage < 0) testimonialCarouselPage = totalPages - 1;
  const start = testimonialCarouselPage * pageSize;
  const slice = TESTIMONIALS.slice(start, start + pageSize);
  homeGrid.innerHTML = slice.map(t => `
    <div class="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <div class="text-amber-400 text-sm tracking-wider">★★★★★</div>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">${t.visa}</span>
        </div>
        <p class="text-sm text-slate-700 italic leading-relaxed mb-4">"${t.quote}"</p>
      </div>
      <div class="flex items-center gap-3 pt-3 border-t border-slate-100">
        <div class="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
          ${t.name.charAt(0)}
        </div>
        <div>
          <div class="text-sm font-bold text-slate-900">${t.name}</div>
          <div class="text-xs text-slate-500">${t.location} • Verified Client</div>
        </div>
      </div>
    </div>
  `).join("");
  if (indicator) indicator.textContent = (testimonialCarouselPage + 1) + " / " + totalPages;
}

function shiftTestimonialCarousel(delta) {
  testimonialCarouselPage += delta;
  renderHomeTestimonialCarousel();
}

// Hero Banner Carousel Functions
function updateHeroCarouselUI() {
  const track = document.getElementById("hero-carousel-track");
  if (track) {
    track.style.transform = `translateX(-${heroSlideIndex * 100}%)`;
  }
  for (let i = 0; i < 4; i++) {
    const dot = document.getElementById("hero-dot-" + i);
    if (dot) {
      if (i === heroSlideIndex) {
        dot.className = "w-6 h-2 rounded-full bg-red-500 transition-all";
      } else {
        dot.className = "w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-all";
      }
    }
  }
}

function nextHeroSlide() {
  heroSlideIndex = (heroSlideIndex + 1) % 4;
  updateHeroCarouselUI();
}

function prevHeroSlide() {
  heroSlideIndex = (heroSlideIndex + 3) % 4;
  updateHeroCarouselUI();
}

function goToHeroSlide(idx) {
  heroSlideIndex = idx;
  updateHeroCarouselUI();
}

function pauseHeroCarousel(paused) {
  heroPaused = paused;
}

function startHeroAutoPlay() {
  if (heroIntervalId) clearInterval(heroIntervalId);
  heroIntervalId = setInterval(() => {
    if (!heroPaused && currentView === "home") {
      nextHeroSlide();
    }
  }, 4500);
}

// Reels Of The Week Carousel Functions
function renderReelsCarousel() {
  const grid = document.getElementById("home-reels-carousel");
  const indicator = document.getElementById("reels-carousel-indicator");
  if (!grid) return;
  const pageSize = 4;
  const totalPages = Math.ceil(REELS_DATA.length / pageSize);
  if (reelsCarouselPage >= totalPages) reelsCarouselPage = 0;
  if (reelsCarouselPage < 0) reelsCarouselPage = totalPages - 1;
  const slice = [];
  for (let i = 0; i < pageSize; i++) {
    slice.push(REELS_DATA[(reelsCarouselPage * 2 + i) % REELS_DATA.length]);
  }
  grid.innerHTML = slice.map(r => `
    <div onclick="openReelModal('${r.id}')" class="cursor-pointer group rounded-2xl bg-gradient-to-b from-slate-800/90 to-[#071529] border border-white/15 p-5 flex flex-col justify-between h-64 hover:border-red-500 transition-all shadow-lg">
      <div class="flex items-center justify-between">
        <span class="px-2.5 py-1 rounded-full bg-white/10 text-[11px] font-bold text-amber-300">${r.tag}</span>
        <span class="text-[11px] text-slate-300 font-mono">${r.duration}</span>
      </div>
      <div class="my-auto text-center py-2">
        <div class="w-12 h-12 mx-auto rounded-full bg-red-600/90 group-hover:scale-110 transition-transform flex items-center justify-center text-white font-bold shadow-md mb-2">
          ▶
        </div>
        <h3 class="text-sm font-extrabold text-white leading-snug line-clamp-2">${r.title}</h3>
      </div>
      <div class="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/10">
        <span>${r.views}</span>
        <span class="text-black400 font-bold group-hover:underline">Watch Reel →</span>
      </div>
    </div>
  `).join("");
  if (indicator) indicator.textContent = (reelsCarouselPage + 1) + " / " + totalPages;
}

function shiftReelsCarousel(delta) {
  reelsCarouselPage += delta;
  renderReelsCarousel();
}

function openReelModal(reelId) {
  const r = REELS_DATA.find(item => item.id === reelId);
  if (!r) return;
  document.getElementById("reel-modal-tag").textContent = r.tag;
  document.getElementById("reel-modal-icon").textContent = r.icon;
  document.getElementById("reel-modal-title").textContent = r.title;
  document.getElementById("reel-modal-desc").textContent = r.desc;
  document.getElementById("reel-modal-views").textContent = "▶ " + r.views + " (" + r.duration + ")";
  document.getElementById("reel-modal").classList.remove("hidden");
}

function closeReelModal() {
  document.getElementById("reel-modal").classList.add("hidden");
}

// Media Mentions & Recent Achievements Carousel Functions
function renderAchievementsCarousel() {
  const grid = document.getElementById("home-achievements-carousel");
  const indicator = document.getElementById("achievements-carousel-indicator");
  if (!grid) return;
  const pageSize = 3;
  const totalPages = Math.ceil(ACHIEVEMENTS_DATA.length / pageSize);
  if (achievementsCarouselPage >= totalPages) achievementsCarouselPage = 0;
  if (achievementsCarouselPage < 0) achievementsCarouselPage = totalPages - 1;
  const start = achievementsCarouselPage * pageSize;
  const slice = ACHIEVEMENTS_DATA.slice(start, start + pageSize);
  grid.innerHTML = slice.map(a => `
    <div class="rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between hover:bg-white/10 transition-colors">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-[11px] font-bold">${a.badge}</span>
        </div>
        <h3 class="text-base font-extrabold text-white mb-2 leading-snug">${a.title}</h3>
        <p class="text-xs text-slate-300 leading-relaxed mb-4">${a.desc}</p>
      </div>
      <div class="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
        <span>${a.date}</span>
        <button type="button" onclick="switchView('cases')" class="text-amber-300 font-bold hover:underline">View Details →</button>
      </div>
    </div>
  `).join("");
  if (indicator) indicator.textContent = (achievementsCarouselPage + 1) + " / " + totalPages;
}

function shiftAchievementsCarousel(delta) {
  achievementsCarouselPage += delta;
  renderAchievementsCarousel();
}

// Render FAQs
function renderFaqs() {
  const homeFaq = document.getElementById("home-faq-list");
  const fullFaq = document.getElementById("full-faq-list");

  const buildFaq = (item, idx, prefix) => `
    <div class="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <button type="button" onclick="toggleFaqItem('${prefix}-${idx}')" class="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
        <span class="font-bold text-sm text-slate-900">${idx + 1}. ${item.q}</span>
        <span id="faq-icon-${prefix}-${idx}" class="text-black600 font-bold text-lg">+</span>
      </button>
      <div id="faq-body-${prefix}-${idx}" class="${idx === 0 ? '' : 'hidden'} px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
        ${item.a}
      </div>
    </div>
  `;

  if (homeFaq) homeFaq.innerHTML = FAQS.map((f, i) => buildFaq(f, i, "home")).join("");
  if (fullFaq) fullFaq.innerHTML = FAQS.map((f, i) => buildFaq(f, i, "full")).join("");
}

function toggleFaqItem(idSuffix) {
  const body = document.getElementById("faq-body-" + idSuffix);
  const icon = document.getElementById("faq-icon-" + idSuffix);
  if (!body) return;
  const isHidden = body.classList.contains("hidden");
  body.classList.toggle("hidden", !isHidden);
  if (icon) icon.textContent = isHidden ? "−" : "+";
}

// Handle Lead & Assessment Form Submission
function handleAssessmentSubmit(event, formId) {
  event.preventDefault();
  const form = document.getElementById(formId);
  if (!form) return;

  const name = form.querySelector("[name='fullName']")?.value || "Applicant";
  const country = form.querySelector("[name='country']")?.value || "Canada";
  const english = form.querySelector("[name='english']")?.value || "Good (7 Band)";
  const education = form.querySelector("[name='education']")?.value || "Masters";
  const visaType = form.querySelector("[name='visaType']")?.value || "Permanent Visa";

  const modal = document.getElementById("assessment-result-modal");
  document.getElementById("ar-name").textContent = name;
  document.getElementById("ar-country").textContent = country;
  document.getElementById("ar-pathway").textContent = visaType + " (" + education + " • " + english + ")";
  modal.classList.remove("hidden");
  form.reset();
}

function closeAssessmentModal() {
  document.getElementById("assessment-result-modal").classList.add("hidden");
}

// Pay Now Modal
function openPayModal() {
  document.getElementById("pay-modal").classList.remove("hidden");
}
function closePayModal() {
  document.getElementById("pay-modal").classList.add("hidden");
}
function handlePaySubmit(event) {
  event.preventDefault();
  const pkg = document.getElementById("pay-package").value;
  const clientName = document.getElementById("pay-name").value || "Valued Client";
  closePayModal();
  showToast("Payment link generated for " + clientName + " (" + pkg + "). Sent to your email & WhatsApp!");
}

// Policy Modals (Privacy Policy & Terms & Conditions)
function openPolicyModal(type) {
  const titleEl = document.getElementById("policy-modal-title");
  const contentEl = document.getElementById("policy-modal-body");
  if (type === "privacy") {
    titleEl.textContent = "Privacy Policy — Viraj Immigration Pvt Ltd";
    contentEl.innerHTML = `
      <p class="text-xs text-slate-500 mb-3">Effective Date: October 2026</p>
      <p class="mb-3">At Viraj Immigration Pvt Ltd, we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you interact with our website, services, or visit our Nehru Place office.</p>
      <h4 class="font-bold text-slate-900 mt-4 mb-1">1. Information We Collect</h4>
      <p class="mb-2">• <strong>Personal Details:</strong> Name, date of birth, passport details, address, phone number, email ID.<br>• <strong>Visa-Related Information:</strong> Immigration history, travel documents, educational credentials, and employment records.<br>• <strong>Payment Information:</strong> Billing details and receipts (we do not store raw credit/debit card numbers).</p>
      <h4 class="font-bold text-slate-900 mt-4 mb-1">2. How We Use & Share Information</h4>
      <p class="mb-2">We do not sell or rent your personal data. We share data strictly with authorized government bodies, credential assessment agencies (WES/ACS/VETASSESS), or embassies as required to process your visa application.</p>
      <h4 class="font-bold text-slate-900 mt-4 mb-1">3. Contact Us</h4>
      <p>Email: info@virajimmigration.com • Phone: +91-6262191313 • Address: 10th Floor, Devika Tower, 1001-A, Nehru Place, New Delhi 110019.</p>
    `;
  } else {
    titleEl.textContent = "Terms & Conditions — Viraj Immigration Pvt Ltd";
    contentEl.innerHTML = `
      <p class="text-xs text-slate-500 mb-3">Effective Date: October 2026</p>
      <p class="mb-3">By accessing or using Viraj Immigration Pvt Ltd services, you agree to be bound by the following Terms & Conditions:</p>
      <h4 class="font-bold text-slate-900 mt-4 mb-1">1. Scope of Consultation & Retainer</h4>
      <p class="mb-2">Viraj Immigration Pvt Ltd provides eligibility assessment, documentation verification, EOI/application preparation, and post-landing guidance. All engagements are governed by a written Retainer Agreement signed by the client.</p>
      <h4 class="font-bold text-slate-900 mt-4 mb-1">2. Client Responsibilities</h4>
      <p class="mb-2">Clients must provide authentic, legally valid educational, identity, and financial documents. Submission of fraudulent or misrepresented documents results in immediate termination of service.</p>
      <h4 class="font-bold text-slate-900 mt-4 mb-1">3. Fees, Government Charges & Refund Policy</h4>
      <p class="mb-2">All consultancy service charges are explained clearly prior to onboarding. Government, embassy, biometric, and credential assessment fees are paid separately by the applicant. Service fees cover professional consultation and case preparation; final visa issuance remains at the sole discretion of the respective high commission or embassy.</p>
    `;
  }
  document.getElementById("policy-modal").classList.remove("hidden");
}
function closePolicyModal() {
  document.getElementById("policy-modal").classList.add("hidden");
}

// Live Chat Assistant Drawer
function toggleChatWidget() {
  const box = document.getElementById("chat-widget-box");
  if (box) box.classList.toggle("hidden");
}

function sendChatMessage(event) {
  event.preventDefault();
  const input = document.getElementById("chat-input");
  const log = document.getElementById("chat-messages");
  if (!input || !log) return;
  const text = input.value.trim();
  if (!text) return;

  const userBubble = document.createElement("div");
  userBubble.className = "bg-red-600 text-white text-xs rounded-xl rounded-br-none px-3.5 py-2.5 self-end max-w-[85%]";
  userBubble.textContent = text;
  log.appendChild(userBubble);
  input.value = "";
  log.scrollTop = log.scrollHeight;

  setTimeout(() => {
    const botBubble = document.createElement("div");
    botBubble.className = "bg-slate-100 text-slate-800 text-xs rounded-xl rounded-bl-none px-3.5 py-2.5 self-start max-w-[88%]";
    const lower = text.toLowerCase();
    if (lower.includes("canada") || lower.includes("crs")) {
      botBubble.innerHTML = "For <strong>Canada PR</strong>, you need 67/100 FSW points. Would you like to check our <button type='button' onclick='openCalculator(\"canada\")' class='underline font-bold text-black600'>Canada Points Calculator</button> or speak with our Nehru Place case manager at +91-6262191313?";
    } else if (lower.includes("australia") || lower.includes("189") || lower.includes("190")) {
      botBubble.innerHTML = "For <strong>Australia PR (Subclass 189/190/491)</strong>, the minimum threshold is 65 points. Try our <button type='button' onclick='openCalculator(\"australia\")' class='underline font-bold text-black600'>Australia 65-Point Calculator</button>!";
    } else if (lower.includes("germany") || lower.includes("opportunity")) {
      botBubble.innerHTML = "The <strong>Germany Opportunity Card 2026</strong> lets you move to Germany for 1 year without a job offer if you score 6+ points! Check your score on our <button type='button' onclick='openCalculator(\"germany\")' class='underline font-bold text-black600'>Chancenkarte Calculator</button>.";
    } else {
      botBubble.innerHTML = "Thank you for reaching out to <strong>Viraj Immigration Pvt Ltd</strong>! Our Senior Case Manager Nikita or Founder Gurpreet Singh's desk can evaluate your profile for free. Call/WhatsApp <strong>+91-6262191313</strong> or fill out the Free Assessment Form on this page.";
    }
    log.appendChild(botBubble);
    log.scrollTop = log.scrollHeight;
  }, 350);
}

// Toast Notification Helper (Canvas-safe replacement for alert)
function showToast(msg) {
  const toast = document.getElementById("app-toast");
  const toastText = document.getElementById("app-toast-text");
  if (!toast || !toastText) return;
  toastText.textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 4500);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const m = document.getElementById("mobile-menu");
  if (m) m.classList.toggle("hidden");
}

// Initialize on DOM Ready
window.addEventListener("DOMContentLoaded", () => {
  renderCaseStudies("All");
  renderBlogs("All");
  renderReelsCarousel();
  renderAchievementsCarousel();
  renderTestimonials();
  renderFaqs();
  startHeroAutoPlay();
  calculateCanadaPoints();
  calculateAustraliaPoints();
  calculateGermanyPoints();
});
