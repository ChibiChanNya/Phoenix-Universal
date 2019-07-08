export default {

  // Navbar Items
  hello: 'Hello@!',
  pages: {
    home: 'Home',
    projects: 'Projects',
    about_us: 'About Us',
    blog: 'Blog',
    academy: 'Academy',
    privacy: 'Privacy Policy',
    services: 'Services',
    web_development: 'Web Development',
    mobile_development: 'Mobile Development',
    company_image: 'Company Image',
    online_marketing: 'Online Marketing',
    consulting: 'Consulting',
    motion_graphics: 'Motion Graphics'
  },

  // Errors and alerts for contact form
  contact_form: {
    modal_btn: 'Contact us',
    modal_headline: 'Send us a message if you have any questions or you want a quote',
    modal_name: 'Name*',
    modal_name_hint: 'First and last name',
    modal_company: 'Company',
    modal_company_hint: 'Company which you represent (optional)',
    modal_email: 'Email*',
    modal_email_hint: 'E-mail address',
    modal_message: 'Message*',
    modal_asterisk: '* Required field',
    modal_submit: 'Send',
    modal_cancel: 'Cancel',
    name_required: "Name is required",
    email_required: "Email is required",
    email_invalid: "Invalid Email address",
    message_required: "A message is required",
    form_incomplete: "Make sure to fill in all required fields",
    form_success: "Your message was sent succesfully! We'll get in contact very soon",
    form_failure: "Oops! There was an error sending your message. Please attempt to contact us directly"
  },

  // Index page strings
  home: {
    create: 'CREATE',
    transform: 'TRANSFORM',
    evolve: 'EVOLVE',
    digital_agency: 'Digital Agency in México',
    know_us: 'Get to know us',
    services_title: 'Our Services',
    services_text: 'In order develop projects that add value to our customer we focus our knowledge in understanding their needs and those of their clients by offering solutions in:',
    promo_title: 'Getting a professional level website has never been this easy!',
    promo_text: '¡Start your project with us!',
    promo_btn: 'Request a quote',
    projects_title: 'Our Projects',
    contact_title: 'Get in touch',
    contact_text: 'If you have any questions or an idea we cna help you figure it out and take your product to the next level.\n Tell us a little about what we will build together',
    cards: [
      {
        icon: 'code',
        title: 'Web Development',
        text: 'Design and development of:',
        list: ['Websites', 'E-Commerce', 'Innovative Platforms', 'Enterprise Systems'],
        to: 'services-web-dev'
      },
      {
        icon: 'fas fa-mobile-alt',
        title: 'Mobile Development',
        text: 'Design and development of:',
        list: ['iOS Apps', 'Android Apps', 'Hybrid Apps'],
        to: 'services-mobile-dev'
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Digital Marketing',
        text: 'Creation, development and execution of Digital Marketing Strategies using:',
        list: ['Inbound Marketing', 'SEO/SEM Web Placement', 'Publicity campaigns', 'Social Media', 'Content stratgy'],
        to: 'services-online-marketing'
      },
      {
        icon: 'fas fa-briefcase',
        title: 'Company Image',
        text: 'We develop your company\'s identit through the creation of:',
        list: ['Brand Style', 'Corporate Identity manual', 'Corporate Branding'],
        to: 'services-company-image'
      },
      {
        icon: 'fas fa-chalkboard',
        title: 'Consulting',
        text: 'Courses and Training on:',
        list: ['Business Creation & Development', 'Corporate Identity', 'Digital Marketing'],
        to: 'services-web-dev'
      },
      {
        icon: 'video_library',
        title: 'Motion Graphics',
        text: 'Creative digital animation solutions for:',
        list: ['Explainer Videos', 'Social Media animations', 'Corporate videos'],
        to: 'services-motion-graphics'
      }
    ],
    projects: [
      {
        title: 'FUTHUB',
        text: 'Platform that connects Professional Soccer players, coaches and clubs.'
      },
      {
        title: 'PROMTEL',
        text: 'Proposal for informative website for the Mexican Government\'s Telecom promotion organism.'
      },
      {
        title: 'AFER',
        text: 'Informative website for AFER PLOMERÍA ESPECIALIZADA, company in Chihuahua city.'
      },
      {
        title: 'QUINIELA RUSIA 2018',
        text: 'Russia 2018 FIFA World Cup Football pools web app for office workers.'
      },
      {
        title: 'GREEN PIT',
        text: 'French Machines used for hydrogen decarbonization of car engines.'
      }
    ]
  },
  footer: {
    social_msg: 'Check us out on social media!'
  },
  blog: {
    header: ' Phoenix Development\'s Blog ',
    read_more: 'Read more',
    by: 'By',
    category: 'Category',
    published: 'Published',
    share: 'Share'
  },

  about: {
    header: 'Who we are:',
    p1: 'We are Phoenix Development, a digital agency created to offer customized tech-based solutions to each of our clients.',
    p2: 'Our work teams employ expert consultants in Software Development, Digital Marketing, Brand Development, Business and IT from the best universities in México.',
    p3: 'Our internal processes and strategies allow us to offer solutions that will transform any business from "traditional" to "digital".',
    p4: 'Before offering any solution, our team of experts first studies your branding, business model and tools used in your operation.This analysis allows us to come up with a solution that adds value and has a positive effect on your specific business.',
    mission: 'Mission',
    mission_text: 'Develop from scratch, transform your business and evolve alongside new technologies.',
    vision: 'Vision',
    vision_text: 'Turn our clients into allies because of the positive impact generated by our work.',
    values: 'Our Values',
    value_1: {
      title: 'Happiness',
      text: 'We love what we do. Helping you transform your business is a pleasure.'
    },
    value_2: {
      title: 'Innovation',
      text: 'We learn every day so we can transform our knowledge into solutions for you.'
    },
    value_3: {
      title: 'Impact',
      text: 'We focus on the most important problems in your business and target them with high impact solutions.'
    },
    value_4: {
      title: 'Teaching',
      text: 'We enjoy teaching you how to transform your buisness.'
    }
  },

  services: {

    btn_text: 'Get a Quote',
    //WEB DEVELOPMENT
    web_development: {
      header: {
        title: 'Professional Web Design and Development',
        text: 'Our development team is composed of experts in Web Design, User Experience, Coding and Project Management.'
      },
      sections: [
        {
          title: 'Responsive Design',
          text: 'Over 50% of all internet users makes searches on their smartphones. If your website lacks responsive design it will not display properly on mobile devices and you will miss out on sales and potential customers. With our responsive web design services, you get a polished design so you can maximize conversions.',
          bullets: [
            'Professional layout for every resolution',
            'Expose yourself to a wider audience',
            'Improve your search engine ranking'
          ]
        },
        {
          title: 'SEO',
          text: 'SEO (Search Engine Optimization) are the principles we integrate into our code in order to improve your website\'s position on search engines like Google. SEO integration is fundamental to get a good ranking on search engines. Most users will click only to the first 3 search results, you have to appear in them for your keywords!',
          bullets: [
            'Keyword analysis',
            'Web Page loading speed optimization',
            'Rich media content to display on search engines'
          ]
        },
        {
          title: 'E-Commerce',
          text: 'Connect with your audience using a robust E-Commerce system and transform your business. We make online sales easy by incorporating payments, inventory and order processing all in one place. Your clients will experience an ideal shopping experience and you\'ll love how easy it is to manage your business in just one place.',
          bullets: [
            'Customized store design',
            'Inventory and payment methods management',
            'Automatic orders and shipping'
          ]
        },
        {
          title: 'Killer Apps',
          text: 'Got an idea in mind that will make you the next Mark Zuckerberg? We\'ll help you turn it into reality. Any project you can imagine is now at your fingertips.',
          bullets: [
            'Business model consulting',
            'Keep your data secured and backed up',
            'Integrations with other platforms'
          ]
        }
      ]
    },

    //  MOBILE DEVELOPMENT
    mobile_development: {
      header: {
        title: 'Customized apps for mobile devices',
        text: 'The vast majority of users consme their online content through smartphones. Our team\'s wide range of skills allows us to align our service towards your app development needs, whether for Android or iOS.'
      },
      sections: [
        {
          title: 'Hybrid Development',
          text: '99% of consumers use either iOS or Android devices. It is essential for any app that wants maximum exposure to be available for both operative systems. Hybrid Apps allow you to achieve this without needing to develop 2 separate projects.',
          bullets: [
            'Offer your service to as many users as possible',
            'Much cheaper than developing 2 separate apps',
            'Offer the same experience regardless of device'
          ]
        },
        {
          title: 'User Experience',
          text: '¿Have you used an app that responds just in time and the gestures feel intuitive? That is the proof of good user experience. To achieve this, the project must go beyond the blueprints and be fine tuned to achieve perfection.',
          bullets: [
            'Least amount of interaction to reach the main functions',
            'Gestures so natural you already know them',
            'Optimal use of brand and generic colors for each function'
          ]
        },
        {
          title: 'Technology Integration',
          text: 'One of the advantages of mobile devices over personal computers is access to hardware functions such as Camera, GPS, gyroscope and gestures. These techologies allow you to offer a superior user experience compared to Web.',
          bullets: [
            'Use geolocation to customize the information displayed to each user.',
            'Work with photos taken with your phone or use it for Augmented Reality features (AR)',
            'Use bluetooth to connect with peripherals'
          ]
        }
      ]
    },

    // MARKETING DIGITAL
    online_marketing: {

      header: {
        title: 'Online Marketing',
        text: 'Online marketing covers all actions y advertising strategies that we plan and apply over multiple channels on the internet. Online marketing employs many diverse tools, put your projects on our hands and connect your company to the digital world.'
      },
      sections: [
        {
          title: 'Inbound Marketing Digital Strategies',
          text: 'We create marketing strategies focused on your specific audience. The key in sales is not in offering a great product, but in knowing your clients. With these strategies we can steer potential clients towards your sales channels.',
          bullets: [
            'ATTRACT new visitors through blog posts, value content and social media',
            'CONVERT leads using forms, meetings and messages',
            'CLOSE deals through E-commerce, downloads or traditional methods'
          ]
        },
        {
          title: 'Content Strategy',
          text: 'A good online marketing strategy will be succesful based on the content being created for customers. Content markeitng is the strategy based on creating, publishing and distributing relevant content for your audience with the goal of attracting new clients and building their loyalty. \n We create value content based on:',
          bullets: [
            'Audience interests',
            'Social Media likes',
            'Demographics',
            'Understanding how your clients think'
          ]
        },
        {
          title: 'Social Media advertisement campaigns',
          text: 'We create campaigns to attract potential clients through social media using tools to identify those who might be interested in your product or service. All of our posts are Value Content.',
          bullets: [
            'Useful for your audience',
            'Tips',
            'Tutorials',
            'Advice'
          ]
        }
      ]

    },
    company_image: {
      header: {
        title: 'Company Image',
        text: 'We develop your company\'s image. Our main goal is for your meta-public to, besides keeping us in mind, also gets a positive image of your business.'
      },
      sections: [
        {
          title: 'Corporate Indentity Manual',
          text: 'Normative document that defines the rules for correctly using your branding. Each Identity Manual is designed while keeping mind those who will be responsible for interpreting, articulating, communicating and displaying your brand on different mediums. \n The follow elements are fundamental in defining any brand:',
          bullets: [
            'Name and meaning',
            'Logo',
            'Slogan',
            'Style and voice',
            'Rationales',
            'Mission Statement and Values'
          ]
        }
      ]

    },

// MOTION GRAPHICS
    motion_graphics: {

      header: {
        title: 'Motion Graphics',
        text: 'Keep your project up-to-date with current trends. Nowadays video is the new text. Showcase your project in dynamic fashion with an animated video! Our team of Motion Graphics Artists, Illustrators and Scriptwriters will be your best ally for producing audiovisual media to suit your every need.'
      },
      sections: [
        {
          title: 'Explainer Video',
          text: 'If your goal is just to explain what your project is about in an attractive manner then an explainer video is your best bet. We focus on developing an intelligent narrative to highlight the best features of your project.',
          bullets: [
            '30 to 90 seconds animation length',
            'Multi-Platform format',
            'Explains the purpose and value of your project'
          ]
        },
        {
          title: 'Social Media Animations',
          text: 'A 15 second video is enough to captivate your audience. Creativity is key and our team is specialized at finding these solutions. Our videos are optimized for mobile device display, either square or vertical.',
          bullets: [
            'Mobile-friendly 10-15 second animation to use on social media posts',
            'Facebook Blueprint certified',
            'Monthly animation packages for continuous content'
          ]
        },
        {
          title: 'Corporate Video',
          text: 'Beyond just animating, our job is to come up with solutions to convey the values of your company. These videos are an excellent tool for sales, complimenting presentations and publishing content on any of your company\'s digital platforms.',
          bullets: [
            'Business-appropiate communication',
            'Ideal for presentations and pitches',
            'Better than text for conveying complex ideas'
          ]
        }
      ]

    }

  }


}
