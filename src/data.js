// ============ EDIT YOUR CONTENT HERE (everything marked DUMMY is placeholder) ============
export const SITE = { name:'Modern Institute of Computers', short:'MIO Computers', phone:'7051582305', wa:'917051582305',
  email:'miocomputers01@gmail.com', address:'Chitergull Shangus, Anantnag, J&K 192201',
  facebook:'https://www.facebook.com/profile.php?id=61572305319895', careersEmail:'miocomputers01@gmail.com', // DUMMY: change careers email if needed
  mapsQuery:'Chitergull Shangus Anantnag', hours:'Mon–Sat, 9:00 AM – 6:00 PM' /* DUMMY */ }
export const STATS = [['1000+','Students trained'],['6+','Career courses'],['100%','Hands-on labs'],['24/7','Online MERN support']] // DUMMY numbers
export const COURSES = [
 { id:'mern', name:'Master Web Development (MERN Stack)', tag:'FULLY ONLINE', duration:'6 Months', mode:'100% Online (Live)', icon:'⚛️', featured:true,
   blurb:'Become a full-stack developer: MongoDB, Express.js, React.js & Node.js with real projects and deployment.' },
 { id:'adca', name:'ADCA – Advanced Diploma in Computer Applications', tag:'1 YEAR', duration:'12 Months', mode:'Offline Classroom', icon:'🎓', blurb:'Comprehensive diploma covering computer fundamentals, MS Office, internet, accounting and more.' },
 { id:'dca', name:'DCA – Diploma in Computer Applications', tag:'POPULAR', duration:'6 Months', mode:'Offline Classroom', icon:'💻', blurb:'Hardware, OS, Word, Excel, PowerPoint, networking, cyber security, database basics and a mini project.' },
 { id:'fund', name:'Computer Fundamentals', tag:'BEGINNER', duration:'3 Months', mode:'Offline', icon:'🧠', blurb:'Perfect first step: how computers work, Windows, internet, email and safe digital practices.' },
 { id:'office', name:'MS Office Mastery', tag:'JOB READY', duration:'3 Months', mode:'Offline', icon:'📊', blurb:'Word, Excel (formulas, charts), PowerPoint and mail merge for office-ready skills.' },
 { id:'tally', name:'Tally & Computerized Accounting', tag:'ACCOUNTS', duration:'3 Months', mode:'Offline', icon:'🧾', blurb:'Accounting concepts, voucher entry and accounting software basics.' }, // DUMMY duration
]
export const MERN = { modules:[['MongoDB','Store and manage data with a powerful NoSQL database.','🍃'],['Express.js','Build fast, secure backend APIs.','⚡'],['React.js','Create interactive, responsive interfaces.','⚛️'],['Node.js','Server-side development for scalable apps.','🟢']],
 features:['Complete frontend & backend development','Real-world projects','Responsive website design','REST API development','Authentication & security','Database integration','Deployment & hosting','Beginner to advanced level','Live practical examples','Certificate of completion'],
 who:['Beginners with no coding experience','Students and job seekers','Freelancers and entrepreneurs','Anyone interested in web development'],
 roadmap:[['Month 1','HTML, CSS, JavaScript'],['Month 2','Advanced JS, Git, React basics'],['Month 3','React projects, state & routing'],['Month 4','Node.js & Express APIs'],['Month 5','MongoDB, auth & security'],['Month 6','Capstone project & deployment']] } // DUMMY roadmap
export const INSTRUCTORS = [
 { id:'aaliya-khan', name:'Aaliya Khan', role:'Lead MERN Stack Instructor', exp:'8+ years', init:'AK', bio:'Full-stack engineer who has shipped 30+ production apps. Aaliya turns complex concepts into simple, project-driven lessons.', skills:['React.js','Node.js','MongoDB','System Design'], edu:'M.Tech Computer Science', quote:'Build real things from week one.' }, // DUMMY
 { id:'imran-malik', name:'Imran Malik', role:'Senior Faculty – ADCA, DCA & Office', exp:'10+ years', init:'IM', bio:'Veteran trainer who has guided hundreds of students from computer basics to confident job-ready professionals.', skills:['MS Office','Tally','Networking','Cyber Security'], edu:'MCA, ADCA Certified', quote:'Every student can master technology.' }, // DUMMY
]
export const PROJECTS = [
 ['E-Commerce Store','MERN','from-sky-500 to-indigo-600','Hifza Fatima'],['Task Manager Pro','MERN','from-emerald-500 to-teal-600','Ruqaiya Fatima'],
 ['Institute Portal','React','from-fuchsia-500 to-purple-600','Student Team'],['Portfolio Builder','React','from-amber-400 to-orange-600','Owais Beigh'],
 ['Billing System','Tally/Excel','from-rose-500 to-red-600','Zuhaib Ganie'],['Chat App','MERN','from-cyan-400 to-blue-600','Faisal Nawaz']] // DUMMY titles
export const VIDEOS = [{ name:'Hifza Fatima', course:'MERN Stack', quote:'I built my first full-stack app in two months.', yt:'' },{ name:'Aatir Hussain Shah', course:'ADCA', quote:'The practical labs gave me real confidence.', yt:'' },{ name:'Asfeya Khursheed', course:'ADCA', quote:'Supportive teachers and great placement help.', yt:'' }] // yt: paste YouTube video ID
export const REVIEWS = [['Nadim Hassan','Excellent faculty and a very practical approach. Highly recommended!'],['Sweeka Hamid','Best computer institute in Anantnag. ADCA classes were superb.'],['Muneeb Rasool','Friendly environment and well-equipped labs.'],['Zaid Mushtaq','The MERN course online is clear, structured and affordable.']] // DUMMY reviews – replace with real Google reviews
export const FAQS = [['How long are the courses?','Course duration varies by program. Most run 12–16 weeks, with flexible timings for working professionals. MERN Stack runs about 6 months.'],['Is the MERN Stack course online?','Yes — the Master Web Development (MERN Stack) course is conducted fully online with live sessions.'],['Do you provide placement assistance?','Yes: resume building, interview preparation and connections with industry partners.'],['Are there any prerequisites?','Basic courses need none. Advanced courses may require programming knowledge. MERN accepts complete beginners.'],['Do you offer demo classes?','Yes, a free demo class is available — contact us on WhatsApp to book.']]
export const JOBS = [
 { id:'lead', title:'Lead Generation Specialist', type:'Commission → Salary', desc:'Find and connect with prospective students through calls, social media and local outreach, and guide them towards enrolment.', points:['Generate qualified admission enquiries','Follow up via calls & WhatsApp','Report weekly progress'] },
 { id:'affiliate', title:'Affiliate / Ambassador', type:'Commission → Salary', desc:'Represent the institute in your college or community and refer students to our courses.', points:['Promote courses in your network','Organise small awareness sessions','Earn on every successful referral'] }]
export const JOB_TERMS = 'Both roles begin with 2 months of commission-based work, followed by a fixed monthly salary arrangement, subject to the final written agreement.'
// ---- Chatbot knowledge: [keywords, answer]. First best-scoring match wins ----
export const BOT = { greeting:'Assalamu alaikum! 👋 I\'m the MIO assistant. Ask me about courses, MERN Stack, admissions, instructors, careers or contact details.',
 fallback:'I\'m not sure about that one. Please call or WhatsApp us on '+SITE.phone+' and our team will help. You can also ask about courses, MERN, admission, careers or instructors.',
 rules:[
 [['hello','hi','hey','salam','assalam'],'Hello! 😊 How can I help you today? Try "MERN course", "admission" or "contact".'],
 [['mern','full stack','web development','react','node','mongodb'],'⚛️ Master Web Development (MERN Stack) is our flagship course — FULLY ONLINE with live sessions. You learn MongoDB, Express, React & Node.js, build real projects, deploy them and earn a certificate. Beginners welcome! Duration: ~6 months.'],
 [['adca','advanced diploma'],'🎓 ADCA (Advanced Diploma in Computer Applications) is a 1-year program covering fundamentals, MS Office, internet, networking, accounting and more. Admissions are open!'],
 [['dca','diploma'],'💻 DCA covers computer basics, Windows, Word, Excel, PowerPoint, internet, networking, cyber security, database basics and a mini project.'],
 [['course','courses','program','learn','syllabus'],'We offer: MERN Stack (online), ADCA, DCA, Computer Fundamentals, MS Office and Tally/Accounting. Ask about any of them for details!'],
 [['office','excel','word','powerpoint'],'📊 Our MS Office course covers Word, Excel (formulas & charts), PowerPoint and mail merge.'],
 [['fee','fees','price','cost'],'Fees depend on the course and batch. Please WhatsApp us on '+SITE.phone+' for the latest fee details and any offers.'],
 [['admission','admit','join','enrol','enroll','register','demo'],'To join: 1) pick a course, 2) send an enquiry via the form or WhatsApp, 3) attend a free demo class, 4) complete admission. Call '+SITE.phone+'.'],
 [['online'],'The MERN Stack course is fully online. Other courses run in our Anantnag classroom.'],
 [['contact','phone','call','whatsapp','email','number'],'📞 '+SITE.phone+' • WhatsApp '+SITE.phone+' • ✉️ '+SITE.email],
 [['address','location','where','map','anantnag'],'📍 '+SITE.address],
 [['time','timing','hours','open'],'🕘 '+SITE.hours+' (dummy — confirm with the institute).'],
 [['instructor','teacher','faculty','trainer'],'Meet Aaliya Khan (Lead MERN Instructor) and Imran Malik (Senior Faculty). Open the Instructors section to know more!'],
 [['career','job','hiring','vacancy','lead generation','affiliate','ambassador'],'💼 We\'re hiring Lead Generation Specialists and Affiliates/Ambassadors. '+JOB_TERMS+' Apply in the Careers section.'],
 [['placement'],'Yes! We help with resume building, interview prep and industry connections.'],
 [['certificate'],'Certificates are awarded on completion, and can be verified on the institute portal.'],
 [['thank','thanks'],'You\'re welcome! 🌟 Anything else?']]}
export const reply = (q) => { const t=q.toLowerCase(); let best=null,bs=0
  for (const [k,a] of BOT.rules){ const s=k.filter(w=>t.includes(w)).length; if(s>bs){bs=s;best=a} } return best||BOT.fallback }
