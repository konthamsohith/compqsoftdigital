export interface CaseStudySection {
  heading: string;
  intro?: string;
  items: string[];
}

export interface CaseStudy {
  id: number;
  slug: string;
  imageSrc: string;
  date: string;
  readTime: string;
  category: string;
  title: string;
  excerpt: string;
  views: string;
  likes: number;
  sections: CaseStudySection[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: 'retail-operations',
    imageSrc: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=800',
    date: 'Apr 22, 2025',
    readTime: '1 min read',
    category: 'CASE STUDIES',
    title: 'Transforming Retail Operations: Boosting Efficiency and Customer Satisfaction with Dynamics 365 Finance & Operations',
    excerpt: 'Customer A leading retail chain experiencing rapid growth, challenged by outdated ERP systems and an increasingly competitive landscape....',
    views: '28',
    likes: 1,
    sections: [
      {
        heading: 'Customer',
        items: ['A leading retail chain experiencing rapid growth, challenged by outdated ERP systems and an increasingly competitive landscape.']
      },
      {
        heading: 'Business Challenge',
        items: [
          'Legacy ERP systems limited growth and profitability, struggling to meet operational demands.',
          'Disparate, non-integrated systems created inefficiencies, inaccuracies, and slowed decision-making.',
          'Limited control and visibility over processes resulted in operational errors and duplications.',
          'Customer expectations for faster service and personalized experiences were unmet, impacting satisfaction.',
          'Rising competition from market disruptors emphasized the need to modernize and streamline operations.'
        ]
      },
      {
        heading: 'Solutions',
        intro: 'CompQsoft, a certified Microsoft Partner, assessed the retailer’s needs and implemented the Dynamics 365 Finance and Operations module to transform their ERP system. Key solution elements included:',
        items: [
          'A centralized platform for sales, inventory, finance, and customer service, providing seamless integration across functions.',
          'Industry-specific customizations tailored for retail, streamlining workflows and enhancing process control.',
          'Real-time visibility into operations, supporting data-driven decisions and error reduction.',
          '360-degree customer insights with purchase history, preferences, and interaction tracking for personalized service.',
          'Optimized inventory management to minimize overstocking, improve cash flow, and meet customer demand efficiently.'
        ]
      },
      {
        heading: 'Business Impact',
        items: [
          'Increased Revenue: Enhanced efficiency, integration, and customer satisfaction led to revenue growth.',
          'Improved Profitability: Cost reduction, optimized cash flow, and boosted sales contributed to stronger profitability.',
          'Enhanced Customer Experience: Streamlined service delivery and personalization increased customer loyalty and retention.'
        ]
      }
    ]
  },
  {
    id: 2,
    slug: 'industrial-tooling',
    imageSrc: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    date: 'Apr 22, 2025',
    readTime: '2 min read',
    category: 'CASE STUDIES',
    title: 'Leading Industrial Tooling Supplier Transforms Operations with Dynamics 365 Finance & Operations, Boosting Efficiency and Real-Time Visibility',
    excerpt: 'Leading Industrial Tooling Supplier Transforms Operations with Dynamics 365 Finance & Operations, Boosting Efficiency and Real-Time...',
    views: '15',
    likes: 1,
    sections: [
      {
        heading: 'Customer',
        items: ['A trusted industry leader for over 135 years, this client is a premier supplier of high-speed steel and carbide cutting tools, offering end-to-end tooling solutions for drilling, threading, and milling. Their commitment to quality empowers customers with productivity advantages and improved profitability.']
      },
      {
        heading: 'Business Challenge',
        intro: 'The client faced several operational obstacles that hindered growth and efficiency:',
        items: [
          'Legacy Systems & Manual Processes: Dependent on outdated systems for finance, supply chain, and customer relationship management, they faced data silos, duplication, and inaccurate reporting.',
          'Resource Allocation Inefficiencies: Disconnected systems made it difficult to manage resources effectively, resulting in costly inventory, production, and distribution delays.',
          'Limited Real-Time Insights: With fragmented data across systems, the client lacked comprehensive visibility into operations, financials, and customer activities, slowing decision-making and response to market demands.',
          'Need for Streamlined Workflows: Desired a system overhaul to streamline workflows and reduce process bottlenecks.'
        ]
      },
      {
        heading: 'Solutions',
        intro: 'CompQsoft, a Microsoft Partner, introduced Dynamics 365 Finance and Operations as a strategic solution. After detailed consultations, the client recognized its fit for both current and future needs, enabling smoother operations and better alignment with business goals. Key solution components included:',
        items: [
          'Data Migration: Transitioned data from legacy systems into Dynamics 365 for seamless integration.',
          'Process Automation: Automated key processes, including procurement, production, sales, and financial management, significantly enhancing accuracy and operational efficiency.',
          'Real-Time Unified Dashboard: Provided a comprehensive, real-time view of operations, financials, and customer interactions, supporting better-informed decision-making.',
          'Optimized Resource Allocation: Streamlined resource distribution across inventory and production, reducing operational costs.',
          'Lifecycle Tracking: Enabled end-to-end tracking of tools, from delivery and installation to ongoing field servicing.'
        ]
      },
      {
        heading: 'Business Impact',
        intro: 'The deployment of Dynamics 365 Finance and Operations delivered significant improvements:',
        items: [
          'Reduced Manual Labor Costs: Automation minimized manual data entry, lowering labor expenses and reducing errors.',
          'Inventory Optimization: Enhanced inventory management minimized waste and carrying costs, resulting in notable savings.',
          'Streamlined Production: Improved scheduling and resource allocation reduced downtime and bottlenecks, cutting operational costs.',
          'Accelerated Time-to-Market: Optimized processes enabled faster response to customer needs and reduced lead times.',
          'Enhanced Customer Satisfaction: Real-time insights into customer interactions allowed tailored service offerings, boosting satisfaction and repeat business.'
        ]
      }
    ]
  },
  {
    id: 3,
    slug: 'tableau-powerbi',
    imageSrc: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=800',
    date: 'Apr 22, 2025',
    readTime: '2 min read',
    category: 'CASE STUDIES',
    title: 'Empowering Decision-Making with Tableau to Power BI Migration for a Leading Transportation Company',
    excerpt: 'Customer A leading transportation and logistics company. Business Challenge A leading transportation and logistics company relied on...',
    views: '13',
    likes: 1,
    sections: [
      {
        heading: 'Customer',
        items: ['A leading transportation and logistics company.']
      },
      {
        heading: 'Business Challenge',
        intro: 'A leading transportation and logistics company relied on Tableau for enterprise reporting but faced growing challenges:',
        items: [
          'Escalating Costs: Tableau’s licensing fees have become increasingly cost-prohibitive.',
          'Lack of Flexibility: The company needed organization-specific custom visuals but was limited by Tableau’s proprietary structure.',
          'Inaccurate Insights: Inadequate data accuracy and outdated reports hindered business performance.',
          'Data Inefficiencies: Legacy systems caused inefficiencies in analytics and real-time reporting.',
          'Security Concerns: Limited security controls increased the risk of data vulnerabilities.',
          'The company required a cost-effective, flexible, and robust analytics solution to overcome these challenges.'
        ]
      },
      {
        heading: 'Solutions',
        intro: 'To address these issues, the company partnered with our data and analytics team to migrate from Tableau to Power BI:',
        items: [
          'Comprehensive Migration: Successfully migrated 45 reports and the entire dataset from Tableau to Power BI without performance degradation.',
          'Proof of Concept (PoC): Conducted a thorough PoC before completing the migration to ensure feasibility and effectiveness.',
          'Optimized Reporting: Rebuilt reports using DAX formulas for enhanced accuracy and functionality.',
          'Rigorous Testing: Addressed compatibility and quality assurance concerns with detailed testing protocols.',
          'Real-Time Insights: Enabled real-time access to actionable insights, improving decision-making across the organization.',
          'Empowered Teams: Provided hands-on training for the company’s staff to ensure seamless adoption of Power BI.'
        ]
      },
      {
        heading: 'Business Impact',
        items: [
          'Cost Savings: Achieved a 40% reduction in licensing costs, significantly improving ROI.',
          'Enhanced Reporting: Improved accuracy and efficiency with real-time reporting and analytics.',
          'Flexibility and Scalability: Power BI’s custom visuals and robust capabilities allowed the organization to tailor insights to their specific needs.',
          'Increased Security: Strengthened data protection with Power BI’s advanced security features.'
        ]
      }
    ]
  },
  {
    id: 4,
    slug: 'erp-transformation',
    imageSrc: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800',
    date: 'Apr 22, 2025',
    readTime: '1 min read',
    category: 'CASE STUDIES',
    title: 'CompQsoft transforms the legacy ERP system of a leading food manufacturing company by implementing Dynamics 365 Business Central, significantly enhancing operational efficiency and data management.',
    excerpt: 'Customer The client is a leading food manufacturing company, facing growing challenges with their outdated ERP system. Business Challenge...',
    views: '12',
    likes: 1,
    sections: [
      {
        heading: 'Customer',
        items: ['The client is a leading food manufacturing company, facing growing challenges with their outdated ERP system.']
      },
      {
        heading: 'Business Challenge',
        items: [
          'Fragmented data across legacy systems, creating inefficiencies.',
          'The current ERP system was outdated and couldn’t keep up with business growth.',
          'Integration with new technologies was problematic, disrupting workflows with other business applications.',
          'Data sharing between departments was cumbersome and inefficient.',
          'Reliance on manual data collection led to frequent errors and reduced productivity.',
          'The company lacked real-time business insights, hindering informed decision-making.'
        ]
      },
      {
        heading: 'Solutions',
        intro: 'CompQsoft, a trusted Microsoft Partner, conducted discovery sessions and system assessments, recommending Dynamics 365 Business Central as the ideal solution to modernize their ERP system.',
        items: [
          'Migrated data to the cloud for continuous updates and seamless connectivity across departments.',
          'Implemented Business Central integrated with Power Apps to streamline key manufacturing processes.',
          'Built custom workflows using Power Apps to automate manual processes.',
          'Provided end-user training to ensure proficiency in the new system.',
          'Enabled real-time data analysis for actionable insights, enhancing decision-making.',
          'Facilitated automatic data transformation between systems for a smoother workflow.',
          'Improved accessibility to data via mobile devices, significantly boosting operational efficiency.'
        ]
      },
      {
        heading: 'Business Impact',
        items: [
          'The shift to a cloud-based ERP system improved data management and interdepartmental collaboration.',
          'Automation of workflows reduced manual errors and increased overall productivity.',
          'Real-time insights empowered leadership with timely, data-driven decisions.',
          'Mobile accessibility enhanced operational flexibility and efficiency across the organization.'
        ]
      }
    ]
  },
  {
    id: 5,
    slug: 'retailer-estore-salesforce',
    imageSrc: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800',
    date: 'Apr 22, 2025',
    readTime: '2 min read',
    category: 'CASE STUDIES',
    title: 'CompQsoft helps a leading retailer launch its e-Store, and leverages Salesforce Experience Cloud and Commerce Cloud features to expand its business faster.',
    excerpt: 'Customer The customer is a leading retail company with a widespread presence in the US. Business Challenge The retail client had a huge...',
    views: '10',
    likes: 1,
    sections: [
      {
        heading: 'Customer',
        items: ['The customer is a leading retail company with a widespread presence in the US.']
      },
      {
        heading: 'Business Challenge',
        intro: 'The retail client had a huge offline presence and was looking to expand their business through online channels.',
        items: [
          'Limited Online Presence: The retailer faced the challenge of limited online presence, hindering its ability to reach a wider audience and capitalize on the growing e-commerce market.',
          'Inadequate Customer Engagement: The retailer struggled to engage customers effectively online, resulting in lower conversion rates and customer retention.',
          'Complexity in Managing Sales: With disparate systems for managing sales and customer interactions, the retailer encountered inefficiencies and difficulties in tracking and analyzing sales data.'
        ]
      },
      {
        heading: 'Solutions',
        items: [
          'Implementation of Salesforce Experience Cloud: CompQsoft leveraged Salesforce Experience Cloud to create a seamless online experience for the retailer’s customers. This included the development of a user-friendly interface, personalized content delivery, and community-building features to enhance engagement.',
          'Integration of Salesforce Commerce Cloud: By integrating Salesforce Commerce Cloud, CompQsoft enabled the retailer to establish a robust e-commerce platform.',
          'Customization and Optimization: CompQsoft customized the Salesforce platforms to align with the retailer’s specific business requirements. This involved implementing features such as AI-driven product recommendations, mobile responsiveness, and omnichannel capabilities to enhance the overall shopping experience.'
        ]
      },
      {
        heading: 'Business Impact',
        items: [
          'Increased Online Visibility: Helped the retailer significantly expand its online presence. This resulted in increased website traffic and brand visibility, enabling the retailer to reach a broader audience of potential customers.',
          'Enhanced Customer Engagement: With personalized content and seamless shopping experiences, the retailer experienced higher levels of customer engagement. This led to improved conversion rates, repeat purchases, and greater customer satisfaction and loyalty.',
          'Improved Sales Performance: By consolidating sales and customer data within the Salesforce platforms, the retailer gained valuable insights into customer behavior and preferences. This empowered the retailer to make informed decisions, optimize marketing strategies, and drive sales growth.'
        ]
      }
    ]
  },
  {
    id: 6,
    slug: 'migrate-nav-bc',
    imageSrc: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    date: 'Apr 22, 2025',
    readTime: '1 min read',
    category: 'CASE STUDIES',
    title: 'CompQsoft helped a leading manufacturing company migrate Dynamics NAV to Dynamics 365 Business Central to improve operational efficiency, business agility and save costs.',
    excerpt: 'Customer The customer is a leading manufacturer of powertrain solutions. Business Challenges A leading manufacturer utilizes Dynamics NAV...',
    views: '5',
    likes: 1,
    sections: [
      {
        heading: 'Customer',
        items: ['The customer is a leading manufacturer of powertrain solutions.']
      },
      {
        heading: 'Business Challenges',
        intro: 'A leading manufacturer utilizes Dynamics NAV for managing various business operations. Over the years, their business has outgrown, and the legacy Dynamics NAV ERP is not able to scale in terms of technology and functionality.',
        items: [
          'They were planning to migrate from Dynamics NAV to Business Central to manage departments like finance, supply chain and customer service.',
          'They were facing several performance issues with Dynamics NAV impacting their operational efficiency.',
          'Legacy ERP application is not allowing them to scale in terms of technology and functionality.',
          'Dynamics NAV reaching end of support, posing security and compliance risks.',
          'Need for modernization to streamline processes and enhance productivity.'
        ]
      },
      {
        heading: 'Solution',
        intro: 'CompQsoft, a leading Microsoft Dynamics 365 partner upgraded the legacy ERP to modern cloud-based Dynamics 365 Business Central.',
        items: [
          'Conducted comprehensive assessment of current Dynamics NAV setup and business requirements.',
          'Developed a migration strategy tailored to customer’s needs and goals.',
          'Implemented phased approach to minimize disruption to operations.',
          'Business Central enabled them with actionable insights about all the processes and operations.'
        ]
      },
      {
        heading: 'Business Impact',
        items: [
          'Improved scalability and flexibility to support future growth initiatives.',
          'Streamlined business processes resulting in increased efficiency and productivity.',
          'Access to advanced features and functionalities of Dynamics Business Central.',
          'Empowered employees with user-friendly interface and robust reporting capabilities.'
        ]
      }
    ]
  },
  {
    id: 7,
    slug: 'azure-app-modernization',
    imageSrc: 'https://images.unsplash.com/photo-1581091870621-1e9ecc0e5b0f?auto=format&fit=crop&q=80&w=800',
    date: 'Apr 22, 2025',
    readTime: '1 min read',
    category: 'CASE STUDIES',
    title: 'CompQsoft helped a leading consumer services company enhance user experience with application modernization on Microsoft Azure.',
    excerpt: 'Customer The customer is a leading US-based consumer service company. Business Challenges Outdated legacy applications impacting...',
    views: '17',
    likes: 1,
    sections: [
      {
        heading: 'Customer',
        items: ['The customer is a leading US-based consumer service company.']
      },
      {
        heading: 'Business Challenges',
        items: [
          'Outdated legacy applications impacting business. Not scalable for growing business needs.',
          'Old interface, struggling to keep pace with modern design trends impacting user experience.',
          'The customer wanted to introduce new features and improve overall application performance. This was not possible without technical upgrades.',
          'Legacy applications are grappling with security challenges, often struggling to fend off increasingly sophisticated cyber threats.'
        ]
      },
      {
        heading: 'Solution',
        intro: 'CompQsoft modernizes legacy applications with the latest technology stack including cloud, automation, and powerful API upgrades.',
        items: [
          'Revamped UX for both audiences – internal and external.',
          'Use DevOps and Agile approach for application development.',
          'Implemented new features including offline cart shopping mode, adding and scanning new products, new product offerings and promotions, and suggesting new products and deals to customers.',
          'Developed sales dashboards and order view for internal users.'
        ]
      },
      {
        heading: 'Business Impact',
        items: [
          'Improved experience for both customers and internal users.',
          'Increase revenue.',
          'Greater visibility into the order pipeline.'
        ]
      }
    ]
  },
  {
    id: 8,
    slug: 'quickbooks-to-business-central',
    imageSrc: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=800',
    date: 'Apr 22, 2025',
    readTime: '1 min read',
    category: 'CASE STUDIES',
    title: 'Automobile Component Company Migrates from QuickBooks to Business Central, Boosting Growth and Efficiency',
    excerpt: 'Customer A mid-sized leader in the automobile distribution sector, specializing in automobile components. This customer initially relied...',
    views: '8',
    likes: 1,
    sections: [
      {
        heading: 'Customer',
        items: ['A mid-sized leader in the automobile distribution sector, specializing in automobile components. This customer initially relied on QuickBooks Desktop for accounting and auditing.']
      },
      {
        heading: 'Business Challenge',
        intro: 'The customer’s rapid growth exposed limitations in their current accounting solution, which struggled to handle increasing complexity and business demands. Key issues included:',
        items: [
          'Scalability Limitations: QuickBooks Desktop could not support the volume and complexity of transactions as the business grew.',
          'Lack of Insightful Reporting: The platform offered limited insights and reporting options, restricting data-driven decision-making.',
          'Inventory Tracking Constraints: Tracking inventory accurately was a critical requirement, but the existing solution fell short.',
          'Security and Integration Needs: The business sought enhanced security features and seamless integration with third-party and Microsoft applications.'
        ]
      },
      {
        heading: 'Solutions',
        intro: 'CompQsoft, a trusted Microsoft Partner, conducted detailed workshops and proposed Dynamics 365 Business Central to meet the company’s evolving needs. Key solution highlights:',
        items: [
          'Data Migration: Transferred customer, vendor, item, and account data from QuickBooks to Dynamics 365 Business Central.',
          'Project Management Integration: Linked Dynamics 365 Business Central with Project Service Automation to streamline project workflows.',
          'Enhanced Security: Introduced Multi-Factor Authentication (MFA) for robust data protection.',
          'Data Mapping: Organized financial and inventory data in Dynamics 365 for accuracy and compliance.',
          'Custom Reporting: Developed customizable reports, enabling real-time data insights and improved decision-making.'
        ]
      },
      {
        heading: 'Business Impact',
        items: [
          'Scalability for Future Growth: A flexible ERP solution that scales seamlessly with business demands.',
          'Improved Data Accuracy and Compliance: Real-time inventory tracking and data integrity boost operational efficiency.',
          'Enhanced Security and Integration Capabilities: MFA and third-party application integrations foster a secure, connected environment.',
          'Empowered Decision-Making: Comprehensive, customizable reports deliver actionable insights for informed business strategies.'
        ]
      }
    ]
  },
  {
    id: 9,
    slug: 'real-estate-dynamics-finance',
    imageSrc: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    date: 'Apr 22, 2025',
    readTime: '1 min read',
    category: 'CASE STUDIES',
    title: 'America’s leading real estate and home services company uses Dynamics 365 Finance to centralize operations and streamline Financial Processes',
    excerpt: 'Customer America’s leading real estate and home services company . Business Challenge America’s leading real estate and home services...',
    views: '10',
    likes: 1,
    sections: [
      {
        heading: 'Customer',
        items: ['America’s leading real estate and home services company.']
      },
      {
        heading: 'Business Challenge',
        intro: 'America’s leading real estate and home services company faced operational inefficiencies and sought to centralize its processes and financial management on a unified platform.',
        items: [
          'Disjointed ERP System: The company’s existing ERP system lacked centralization. Reports were generated across multiple servers, requiring manual compilation.',
          'Need for Centralization: The company struggled with decentralizing business processes and operations.',
          'Inefficient Financial Management: Smoother operations required streamlining financial records and improving supply chain efficiencies.'
        ]
      },
      {
        heading: 'Solutions',
        intro: 'CompQsoft implemented Microsoft Dynamics 365 Finance and Supply Chain Management to address these challenges. Key actions included:',
        items: [
          'System Integration and Centralization: Conceptualized a tailored architecture to align with business needs, and planned a phased development path for business apps.',
          'Real-Time Data Access: Integrated Power BI for real-time data insights, empowering the company to be agile and make data-driven decisions to minimize losses.',
          'CRM Integration: PowerApps, Power BI, Flow, SharePoint Lists, Dynamics CRM, and Outlook Online enabled seamless app development and integration.'
        ]
      },
      {
        heading: 'Business Impact',
        items: [
          'Increased Efficiency: Streamlined operations, particularly in payables and payments, resulted in improved process efficiency.',
          'Enhanced Visibility: Real-time data access enabled better financial and operational performance visibility, improving decision-making capabilities.'
        ]
      }
    ]
  },
  {
    id: 10,
    slug: 'construction-m365-dynamics-crm',
    imageSrc: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800',
    date: 'Apr 22, 2025',
    readTime: '1 min read',
    category: 'CASE STUDIES',
    title: 'A family-owned international construction company specializing in construction and resources transforms Collaboration and Operational Excellence with Microsoft 365 and Dynamics CRM',
    excerpt: 'Customer A family-owned international construction company. Business Challenge Disconnected Systems : Each business area maintained...',
    views: '9',
    likes: 1,
    sections: [
      {
        heading: 'Customer',
        items: ['A family-owned international construction company.']
      },
      {
        heading: 'Business Challenge',
        items: [
          'Disconnected Systems: Each business area maintained independent project areas, creating silos.',
          'Inefficient Collaboration: Lack of transparency and standardized processes hindered teamwork.',
          'Cultural Shift: Needed employees to adopt new digital tools and collaborative habits.',
          'Legacy Systems: Outdated IT systems required modernization to meet business needs.',
          'Data Redundancy: Files and projects were duplicated across departments.'
        ]
      },
      {
        heading: 'Solutions',
        intro: 'With CompQsoft’s expertise, the company unlocked its digital potential by leveraging Microsoft 365, Dynamics CRM, and Azure:',
        items: [
          'Workshops and Architecture Design: Conceptualized a tailored architecture to align with business needs, and planned a phased development path for business apps.',
          'Construction Defects App: Simplified defect recording, classification, and tracking with smartphone picture uploads.',
          'Dynamic Storage App: Created SharePoint site structures dynamically to store project documents centrally based on CRM project entries.',
          'Building Documentation App: Enhanced communication with clients by documenting and sharing project progress.',
          'Microsoft Tools Utilized: PowerApps, Power BI, Flow, SharePoint Lists, Dynamics CRM, and Outlook Online enabled seamless app development and integration.'
        ]
      },
      {
        heading: 'Business Impact',
        items: [
          'Improved Collaboration: Cross-team collaboration became more efficient and streamlined.',
          'Time Savings: Automated workflows reduced manual effort and duplication.',
          'Enhanced Transparency: Standardized processes and visualized project progress improved clarity across teams.',
          'Higher Quality Workflows: Consistent processes ensured accuracy and reliability in business operations.'
        ]
      }
    ]
  }
];
