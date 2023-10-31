// import React, { createContext, useState } from 'react'
// import Home from './home';
// import Bollywood from './bollywood';
// import Technology from './technology';
// import Fitness from './fitness';
// import Food from './food';


// export const storedat=createContext();
// function Store() {
//     const [Data,setData]=useState([
//         {
//             id:1,
//             heading:"Konkona Sen Sharma admits star system is invading the OTT space: ‘People who are putting in money want to cover the bases’",
//             image:'https://images.indianexpress.com/2023/08/konkona-sen-sharma.jpg?w=640',
//             description:'When OTT platforms first emerged in India, it was believed that they would usher in a new era of storytelling, one that doesn’t rely on stars. But with an increasing number of mainstream stars headlining OTT projects, it looks like the level-playing nature of the streaming space is going to take a hit. The star system has started to seep in, and actor-director Konkona Sen Sharma agrees.',
//             cat:'bolloywood',
//         },
//         {
//             id:2,
//             heading:"78-year-old man trying to cancel train tickets on IRCTC website, ends up losing Rs 4 lakh in online scam",
//             image:'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/man-irctc-124613-16x9.jpeg?VersionId=H2Q0GZc5lJM_i6humt8GndjoOdDGI8MJ&size=690:388',
//             description:'A 78-year-old man attempting to cancel train tickets on the IRCTC website lost Rs 4 lakh in an online scam, falling victim to a fake website and a person posing as a railway employee who gained access to his device and personal information. Scammers deployed various malware tools such as Remote Access Trojans (RATs), keyloggers, and spyware to control his device, leading to the unauthorized withdrawal of funds from his bank accounts.',
//             cat:'technology',
//         },
//         {
//             id:3,
//             heading:"How To Keep Your Liver Healthy And Well Functioning? Experts Share Tips",
//             image:'https://images.news18.com/ibnlive/uploads/2023/08/untitled-design-32-1-16917242283x2.png?impolicy=website&width=510&height=356',
//             description:'he liver is the largest metabolic factory of our body and performs over 500 functions which are essential for maintaining our body’s health. Among these, the salient functions include the synthesis of protein, storage of glycogen, detoxification of drugs and toxins, production of bile, production of proteins needed for blood clotting and production of immune factors which are needed to fight infections.',
//             cat:'fitness',
//         },
//         {
//             id:4,
//             heading:"Peanut Butter Fusion: A Global Twist on Classic Dishes",
//             image:'https://images.news18.com/ibnlive/uploads/2023/08/shutterstock_1829416040-16917276463x2.jpg?impolicy=website&width=510&height=356',
//             description:'Schezwan Peanut Butter Noodles is a delightful fusion dish that combines the rich flavour of peanut butter with the powerful flavour of Schezwan sauce to create a fulfilling and pleasantly different noodle recipe. With a great balance of spiciness and nuttiness that will pique your taste buds, this simple recipe blends the best of both worlds.',
//             cat:'food',
//         },
//     ]
//     )
//   return (
//     <storedat.Provider value={[Data,setData]}>
//         <Home/>
//         <Bollywood/>
//         <Technology/>
//         <Fitness/>
//         <Food/>
//     </storedat.Provider>
//   )
// }

// export default Store


const Data =  [
    {
        id:1,
        heading:"Konkona Sen Sharma admits star system is invading the OTT space: ‘People who are putting in money want to cover the bases’",
        image:'https://images.indianexpress.com/2023/08/konkona-sen-sharma.jpg?w=640',
        description:'When OTT platforms first emerged in India, it was believed that they would usher in a new era of storytelling, one that doesn’t rely on stars. But with an increasing number of mainstream stars headlining OTT projects, it looks like the level-playing nature of the streaming space is going to take a hit. The star system has started to seep in, and actor-director Konkona Sen Sharma agrees.',
        cat:'bolloywood',
    },
    {
        id:2,
        heading:"Rajinikanth seeks blessings at Badrinath post Jailer release",
        image:"https://filmfare.wwmindia.com/content/2023/aug/rajinikanth31691910250.jpg",
        description:"Jailer has been released, and fans are overjoyed to finally see their favourite star Rajinikanth they've been missing on the big screen. The actor is currently not in town to celebrate the film's enormous success with the rest of the cast and crew. Rajinikanth paid a visit to the Badrinath Temple on Saturday post the release of Jailer.The Petta actor also interacted with a few of his fans during his visit to the temple. The actor was dressed in a light blue jumper as he drew the attention of fans, who were clearly excited to see Rajinikanth up close.",
        cat:"bolloywood"
    },
    
    {
        id:3,
        heading:"How To Keep Your Liver Healthy And Well Functioning? Experts Share Tips",
        image:'https://images.news18.com/ibnlive/uploads/2023/08/untitled-design-32-1-16917242283x2.png?impolicy=website&width=510&height=356',
        description:'he liver is the largest metabolic factory of our body and performs over 500 functions which are essential for maintaining our body’s health. Among these, the salient functions include the synthesis of protein, storage of glycogen, detoxification of drugs and toxins, production of bile, production of proteins needed for blood clotting and production of immune factors which are needed to fight infections.',
        cat:'fitness',
    },
    {
        id:4,
        heading:"Peanut Butter Fusion: A Global Twist on Classic Dishes",
        image:'https://images.news18.com/ibnlive/uploads/2023/08/shutterstock_1829416040-16917276463x2.jpg?impolicy=website&width=510&height=356',
        description:'Schezwan Peanut Butter Noodles is a delightful fusion dish that combines the rich flavour of peanut butter with the powerful flavour of Schezwan sauce to create a fulfilling and pleasantly different noodle recipe. With a great balance of spiciness and nuttiness that will pique your taste buds, this simple recipe blends the best of both worlds.',
        cat:'food',
    },
    {
        id:5,
        heading:"Khushi Kapoor Shares Throwback Gem On Mom Sridevi's 60th Birthday. Bonus - Little Janhvi Kapoor",
        image:"https://c.ndtvimg.com/2023-08/plqom2e8_priyanka-_625x300_13_August_23.jpg",
        description:"One of India's first female superstars Sridevi would have turned 60 today [August 13]. The actress had the nation mourning for her when she died in 2018 in Dubai. On her birth anniversary, legions of fans from across the world are celebrating her incredible talent. Sridevi's loved ones too have shared special posts on social media, in honour of the actress. A case in point is Sridevi's younger daughter Khushi Kapoor. On the occasion, Khushi Kapoor has shared a lovely throwback image of herself with her mom. In the photo, the two are also accompanied by Sridevi's elder daughter Janhvi Kapoor.",
        cat:"bolloywood"
    },
    {
        id:6,
        heading:"Shamita Shetty's White Bodysuit And Boots' Combo Wasn't On Our Fashion To-Do List Up Until Now",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoz6DUj_1NDrqdbbTHk2RL1jgdbH11fQ-1iw&usqp=CAU",
        description:"Shamita Shetty's style contrary to her stylish sister Shilpa Shetty's is a mixture of the season's latest trends paired in her unique way. Her latest Instagram profile shows us one such instance. While beach wear is meant for moments in the sun, Shamita took her love for beach staples to a new level far away from the beach. She looked stunning in a white high-leg bodysuit as she made a case for casual monochromatic fashion. The outfit has a flattering fit and she elevated it with a dash of drama with a pair of black thigh-high boots. She completed her attire with a subtle nude makeup look and pink-tinted lips.",
        cat:"bolloywood"
    },
    {
        id:7,
        heading:"Shweta Bachchan Sends Big Love To Brother Abhishek After Ghoomer's Premiere At IFFM",
        image:"https://c.ndtvimg.com/2023-08/5dcpp75o_priyanka-_625x300_13_August_23.jpg",
        description:"Shweta Bachchan has given a big shout-out to her dear brother, actor Abhishek Bachchan. Abhishek's upcoming film Ghoomer premiered at the Indian Film Festival of Melbourne 2023 (IFFM). Ghoomer, which also stars Saiyami Kher, Angad Bedi and Shabana Azmi, narrates the story of a differently-abled sportsperson. Now, Shweta Bachchan has shared two photographs on Instagram to send some love to her brother. In one of the pictures, the brother-sister duo is all smiles as they pose together in a cafe. In another frame, which was presumably clicked ahead of Ghoomer's premiere in Melbourne, Abhishek and Shweta are sharing a hug. “Good on ya mate - love you (evil eye),” read the caption, accompanying the pictures. ",
        cat:"bolloywood"
    },
    {
        id:8,
        heading:"Jawan Song Chaleya Teaser: Shah Rukh Khan And Nayanthara's Chemistry Combusts. Fans Say, Can't Wait",
        image:"https://c.ndtvimg.com/2023-08/t8gi6vtg_priyanka-_625x300_13_August_23.jpg",
        description:"Shah Rukh Khan shared this image. (courtesy: iamsrk) New Delhi: Shah Rukh Khan's Jawan is making all the right noise. The much-awaited film, which also stars Nayanthara and Vijay Sethupathi, will be released worldwide on September 7. After treating us to some stellar posters of the star cast, the makers on Saturday evening shared a teaser of the romantic song Chaleya featuring Shah Rukh Khan and Nayanthara. Fans cant keep calm as Chaleya will explore the on-screen romantic chemistry between the two stars for the first time. The teaser shows Shah Rukh Khan and Nayanthara twirling and dancing to the beats of the song. While Nayanthara looks heavenly in a floral gown, Shah Rukh Khan steals all the limelight as he strikes his signature pose in a black printed shirt.",
        cat:"bolloywood"
    },
    {
        id:9,
        heading:"Farhan Akhtar Shares Trailer Of Daughter Akira's Short Film: May Your Love For Storytelling Last A Lifetime",
        image:"https://c.ndtvimg.com/2023-08/3cjhjvg8_farhan_625x300_12_August_23.jpg",
        description:"Farhan Akhtar is on cloud nine today. After all, his daughter Akira has stepped into the world of cinema. The actor has shared the trailer of Akira's short film Homesick. Farhan has also given a shout-out to his daughter and team Homesick for their upcoming project. The actor, in his detailed note, also revealed how the team shot the film at his home. He said,  “A couple of weeks ago, Akira asked me if some friends could come over to shoot a scene or two for a short film they were doing. Pleasantly surprised and immediately curious, I said yes and asked how many would be coming as crew.. just to have a number in case something needed to be organised for them. She said including the director, it's a total of 3. Here's the trailer for ‘Homesick'... a film by Ahmd featuring Akira Akhtar, Shrutant, and Druva Sawhniey.”",
        cat:"bolloywood"
    },
    {
        id:10,
        heading:"Team Ghoomer In Melbourne: Keeping Up With Abhishek Bachchan, Saiyami Kher, Angad Bedi",
        image:"https://c.ndtvimg.com/2023-08/3fljtoa_-abhishek_625x300_12_August_23.jpg",
        description:"Team Ghoomer is currently in Melbourne. Why, you ask? Well, the film all set to premiere at the Indian Film Festival of Melbourne 2023 (IFFM). During their time there, Abhishek Bachchan visited the iconic Melbourne Cricket Ground along with his co-stars Saiyami Kher and Angad Bedi. Sharing pictures from his day out, Abhishek Bachchan wrote in his caption, What an honour to walk around the MCG. Now to walk towards the premiere tonight. Wish us luck. He added the hashtags #IiffMelbourne, #TeamGhoomer #IFFM2023 and #GhoomerInMelbourne to his post.",
        cat:"bolloywood"
    },
    {
        id:11,
        heading:"Manoj Bajpayee's Next Project Is Titled Bhaiyaaji. Details Here",
        image:"https://c.ndtvimg.com/2023-08/fo88a18_manoj-_625x300_12_August_23.jpg",
        description:"Mumbai: Actor Manoj Bajpayee is set to headline action-drama feature Bhaiyaaji and will also serve as a producer on the project. The upcoming film marks the second collaboration between the actor, director Apoorv Singh Karki and producer Vinod Bhanushali after their critically-acclaimed film Sirf Ek Bandaa Kaafi Hai, which had a digital release in May. Bhaiyaaji will explore emotions like standing for your family and vengeance for the wrongs done towards your own, the makers said in a press note.",
        cat:"bolloywood"
    },
    {
        id:12,
        heading:"Kareena Kapoor's Emotional Tribute To Bodyguard Director Siddique: You Will Be Missed",
        image:"https://c.ndtvimg.com/2023-08/n83o85u8_priyanka-_625x300_09_August_23.jpg",
        description:"New Delhi: Kareena Kapoor's tribute to veteran Malayalam filmmaker Siddique is all heart. The actress, who worked with the filmmaker in the 2011 film Bodyguard alongside Salman Khan, posted a picture of him on her Instagram feed alongside a heartfelt note which read, Will always remember you like this... with a smile. You will be missed Siddique Sir. However, Kareena Kapoor was not the only one to pay tribute to the director. Mammootty, Dulquer Salmaan, Prithviraj Sukumaran and other stars also paid tribute to the late filmmaker on social media.",
        cat:"bolloywood"
    },
    {
        id:13,
        heading:"About Last Night: Scenes From Gadar 2 Screening With Sunny, Bobby Deol And Others",
        image:"https://c.ndtvimg.com/2023-08/89fb1cfo_sunny-deol_625x300_12_August_23.jpg",
        description:"New Delhi: A special screening of Gadar 2 was hosted in Mumbai on the film's release day on Friday. The screening was attended by only close friends and family members. Sunny Deol's cheer squad included brother Bobby Deol and his wife Tanya. Sunny Deol's son Rajveer was also clicked at the screening. Sunny Deol was dressed as his character Tara Singh, while Ameesha Patel showed up as Sakeena. They happily posed for the cameras. Jackie Shroff, filmmaker Subhash Ghai also attended the film's screening last night.",
        cat:"bolloywood"
    },
    {
        id:14,
        heading:"Dharmendra to be the onscreen grandfather of Shahid Kapoor in Laxman Utekar's untitled next",
        image:"https://filmfare.wwmindia.com/content/2023/aug/dharmendrashahidkapoorlaxmanutekar41691825075.jpg",
        description:"In the upcoming directorial venture by Laxman Utekar, which is yet to be titled, the lead roles are portrayed by Shahid Kapoor and Kriti Sanon. According to sources, Sanon will be taking on the role of a robot, while Shahid will be portraying a robotics expert. The film is being produced by Jio Studios and Dinesh Vijan's Maddock Films. This romance drama, penned and directed by Amit Joshi and Aradhana Sah, is an eagerly awaited project in the making.  ",
        cat:"bolloywood"
    },
    {
        id:15,
        heading:"Dazzling Lineup of Films from India at the Toronto International Film Festival 2023",
        image:"https://filmfare.wwmindia.com/content/2023/aug/torontointernationalfilmfestival2023movies81691827723.jpg",
        description:"The impending arrival of the Toronto International Film Festival brings with it the chance to collectively revel in a wide array of cinematic adventures, as it consistently does. Renowned for thrusting exceptional cinematic works into the limelight, the festival boasts an impressive selection of Indian films this year, intensifying our anticipation even further.",
        cat:"bolloywood"
    },
    {
        id:16,
        heading:"2 years of Shershaah: A look back at Sidharth Malhotra and Kiara Advani starrer war biopic",
        image:"https://filmfare.wwmindia.com/content/2023/aug/shershaah151691824391.jpg",
        description:"Based on the life of Captain Vikram Batra, an officer of the Indian Army who was posthumously awarded the Param Vir Chakra, India's highest military honour, for his actions during the 1999 Kargil War between India and Pakistan The film stars Sidharth Malhotra in the lead role, portraying Captain Vikram Batra, and Kiara Advani as Dimple Cheema, his fiancée. The title Shershaah is a reference to Captain Batra's call sign during the war.Directed by Vishnuvardhan, the film depicts Captain Vikram Batra's journey from his early life and military training to his valiant efforts during the Kargil War. It highlights his courage, leadership, and ultimate sacrifice for the nation.We are celebrating two years of Shershaah's release with some photos that will bring back memories.",
        cat:"bolloywood"
    },
    {
        id:17,
        heading:"Karan Johar is all praises for Kartik Aaryan at the Indian Film Festival of Melbourne",
        image:"https://filmfare.wwmindia.com/content/2023/aug/kartikaaryan31691750122.jpg",
        description:"The Indian Film Festival of Melbourne is a celebration of Indian cinema that includes film screenings and interactive discussions with film celebrities. The 14th edition of the festival kicked off today, with many Bollywood celebrities in attendance, including Karan Johar, Kartik Aaryan, Mrunal Thakur, Vijay Varma, and others. Karan and Kartik reunited at the event's press conference.",
        cat:"bolloywood"
    },
    {
        id:18,
        heading:"Tamannaah Bhatia has the cutest reaction to Vijay Varma's latest pictures; see here",
        image:"https://filmfare.wwmindia.com/content/2023/aug/tamannaahbhatia41691724951.jpg",
        description:"Vijay Varma has been a fashion trailblazer of sorts and has had commendable taste in this zone. He recently took to social media to share a series of pictures in a classic white tee layered with a sky-blue blazer and paired with baggy pants. Tamnnaah commented on the same, “Mind blueing (cool face emoticons).”",
        cat:"bolloywood"
    },
    {
        id:19,
        heading:"78-year-old man trying to cancel train tickets on IRCTC website, ends up losing Rs 4 lakh in online scam",
        image:'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/man-irctc-124613-16x9.jpeg?VersionId=H2Q0GZc5lJM_i6humt8GndjoOdDGI8MJ&size=690:388',
        description:'A 78-year-old man attempting to cancel train tickets on the IRCTC website lost Rs 4 lakh in an online scam, falling victim to a fake website and a person posing as a railway employee who gained access to his device and personal information. Scammers deployed various malware tools such as Remote Access Trojans (RATs), keyloggers, and spyware to control his device, leading to the unauthorized withdrawal of funds from his bank accounts.',
        cat:'technology',
    },
    
    {
        id:20,
        heading:"HP Envy x360 with ‘IMAX-enhanced’ notebook review: Have a good time at the movies",
        image:"https://images.indianexpress.com/2023/08/HP-Envy-x360.jpg?w=640",
description:"I vividly remember when I bought the HP Pavilion desktop back in 2004. Its multimedia features – especially the Harman/Kardon speakers – made me excited about the computer. Unlike now when every laptop offers a standardised experience, back in the day computers stood for certain features and you get them for unique experiences. The new HP Envy x360 brings back the good old days with a laptop that earns the title of the first IMAX-enhanced PC. Chances are you might have experienced a movie in the IMAX format and are familiar with the viewing quality. But does the HP Envy x360 really have a stunning screen, or is the IMAX certification just a gimmick? I tried to find the possible answer, and probably more in my review of the HP Envy x360.",
        cat:"technology"
    },
{
        id:21,
        heading:"This is how Himalayan peaks appear from International Space Station",
        image:"https://images.indianexpress.com/2023/08/himalayas.jpg?w=640",
description:"The Himalayan mountain range in Asia is known for being the highest peaks on the earth, which are over 7,200 meters above sea level. Astronaut Sultan AlNeyadi, who is currently on the international space station (ISS) has shared a glimpse of the Himalayan peaks straight from the thermosphere.AlNeyadi, an astronaut from the United Arab Emirates (UAE) has shared two pictures of the mountain range, revealing the majestic view of the earth’s highest peak in its full glory.In a tweet, AlNeyadi said, Home to the Everest summit, the highest point above sea level on earth, these mountains are one of the iconic landmarks of our planet’s rich nature.",
        cat:"technology"
    },
{
        id:22,
        heading:"How Shortwave tamed my inbox with smart organisation & a dash of AI",
        image:"https://images.indianexpress.com/2023/08/shortwave-email-featured.jpg?w=640",
description:"I have a confession to make: I’m a one-email kind of person. That means everything from work, personal, social, and even spam messages end up in the same Gmail inbox. You can imagine how messy and chaotic that can get, especially when I receive about 50 emails per day. Sometimes I miss important work emails because they get buried under the avalanche of newsletters, promotions, and random offers. That’s why I was curious to try Shortwave, an email app created by ex-Googlers that claims to “cut through the noise”. And boy, did it deliver.The first thing that struck me about Shortwave was how it organises emails. As someone who hadn’t gone through the fine print (I assume most people wouldn’t), the interface did take some figuring out and getting used to. Shortwave sorts emails into categories: Updates, Promotions, Newsletters, or Social. This was super useful in helping me decide which emails to attend to and which ones to ignore.",
        cat:"technology"
    },
{
        id:23,
        heading:"India’s maiden solar mission, Aditya L1 hopeful of early September launch",
        image:"https://images.indianexpress.com/2023/08/aditya-l1-1.jpg?w=640",
description:"After two successful mission launches in July, including the Chandrayaan 3, the Indian Space Research Organisation (ISRO) is gearing up for its next big mission to the Sun.Aditya L1 will be India’s first mission to the Sun and is expected to be launched sometime in early September this year, sources have confirmed.Aditya L1 aims to study the solar corona, solar emissions, solar winds and flares, Coronal Mass Ejections (CMEs) besides performing imaging of the Sun, round-the-clock. After Astrosat, this is ISRO’s second astronomy mission / observatory done in collaborations with scientific and research institutes. Aditya L1 will be inserted to Lagrange point L1 located at a distance of 1.5 million kilometers from Earth. The Indian spacecraft will still be over 90 million kilometers away from the Sun. Due to this considerable distance from the Sun, Aditya will be able to perform continuous observations looking directly at the Sun.",
        cat:"technology"
    },
{
        id:24,
        heading:"Samsung Galaxy Z Fold5 review: The flagship business phone, now thinner and stronger",
        image:"https://images.indianexpress.com/2023/08/samsung-galaxy-zfold5-review-main.jpg?w=640",
description:"There are two ways to look at foldable phones. One, they fold away so that a full-size smartphone becomes more portable. Two, they unfold to reveal a larger screen inside what looks like a regular-sized smartphone. Samsung has perfected both these forms over the past few years, but it has more experience with the latter. And that is what is up for show with the new Samsung Galaxy Z Fold5.",
        cat:"technology"
    },
{
        id:25,
        heading:"Chandrayaan-3 undergoes another orbit reduction maneuver, gets closer to Moon’s surface",
        image:"https://images.indianexpress.com/2023/08/Chandrayaan-3-mission-view-20230808.jpg?w=640",
description:"Chandrayaan-3 ventured closer to the lunar surface on Monday with another successful maneuver of the spacecraft by ISRO, the national space agency said. The Bengaluru-headquartered space agency said the spacecraft has now achieved a “near-circular orbit” around the Moon.Post its launch on July 14, Chandrayaan-3, the country’s ambitious third Moon mission, had entered into lunar orbit on August 5, following which two orbit reduction maneuvers were carried out on the spacecraft on August 6 and 9. “Orbit circularisation phase commences. Precise maneuver performed today has achieved a near-circular orbit of 150 km x 177 km,” ISRO said in a tweet. The next operation is planned for August 16, around 08.30 am, it said.As the mission progresses, a series of maneuvers is being conducted by ISRO to gradually reduce Chandrayaan-3’s orbit and position it over the lunar poles.",
        cat:"technology"
    },

{
        id:26,
        heading:"MapmyIndia Mappls introduces a new digital way to express patriotism this Independence day",
        image:"https://images.indianexpress.com/2023/08/mappls-har-ghar-tiranga.jpg?w=640",
description:"MapmyIndia Mappls, the digital maps platform announces a new campaign ‘Har Ghar Tiranga’ & ‘Meri Maati Mera Desh’ to commemorate India’s Independence Day, where, Mappls app on both Android and iOS devices highlights physical flag hoistings, memorials of freedom fighters, and gardens. “We at MapmyIndia salute our heroes who selflessly and fearlessly fought to redeem the glory of this ancient land of knowledge, prosperity and salvation – bestowing upon us the eternal boon of ‘Swarajya’. I am sure with Mappls ‘Har Ghar Tiranga’ & ‘Meri Maati Mera Desh’ we will be able to illuminate the hearts of millions of Indians, across India and the world, where lives the holy ‘Bharata Varsha,” says Rohan Verma, CEO & Executive Director, MapmyIndia.",
        cat:"technology"
    },
{
        id:27,
        heading:"Redesigned Apple Watch X to launch in 2024/25 with magnetic band attachments: Report",
        image:"https://images.indianexpress.com/2023/08/apple-watch-ultra-1.jpg?w=640",
description:"Apple is rumoured to be in the process of developing its tenth iteration smartwatch — Apple Watch X. According to a Bloomberg report, the Apple Watch X is slated for a launch in either 2024 or 2025 to commemorate the 10th anniversary of its smartwatch series. This forthcoming model is reported to incorporate substantial changes to date and is said to include a new magnetic attachment-based strap system.The report also indicates that the Watch X will be the slimmest smartwatch ever crafted by Apple. Moreover, it is set to incorporate a new magnetic band-swapping mechanism, which will eliminate the space required to attach the strap, and further help the company to reduce the watch dimensions.",
        cat:"technology"
    },
{
        id:28,
        heading:"Samsung OneUI 6: Here are the top features you should know",
        image:"https://images.indianexpress.com/2023/08/Oneui-6-samsung.jpg?w=640",
description:"Samsung recently released its first beta of OneUI 6 based on Android 14 for the Galaxy S23 series of smartphones. With this major update, Samsung has revamped a few fundamentals to give OneUI 6 a fresh look and has also included additional features and capabilities.OneUI 6 update is currently available in US, Korea, and Germany for the Samsung Galaxy S23 Ultra, Galaxy S23+, and Galaxy S23. In the coming days, the company is likely to add more devices and more markets to OneUI 6 beta access.",
        cat:"technology"
    },
{
        id:29,
        heading:"Under a Thousand: Add a 3.5 mm audio jack to your phone, and charge it too!",
        image:"https://images.indianexpress.com/2023/08/ugreen-type-c-headphone-jac.jpg?w=640",
description:"It might not have totally disappeared, but the trusty 3.5 mm audio jack does seem well on its way out of our smartphone lives. Phones and tablets above Rs 20,000 are increasingly deserting the port, leaving their users with no choice but to go wireless for their personal audio or invest in a dongle to connect their wired earphones to the phone. The problem with dongles, however, is that many (like the ones from Apple and Google) add a 3.5 mm jack to your device but because they are plugged into the USB Type-C port of the device they are connected to, you often lose the option of using that port. It might not sound like a big deal, except when you suddenly realise that you need to charge your phone but do not want to stop listening to a song or podcast over your favourite pair of headphones.Dongles that plug into your phone or tablet and still give you access to a USB Type C port, as well as a 3.5 mm audio jack, do exist but either tend to cost a pretty penny or tend to add to the bulk of your device. The Ugreen USB-C to 3.5 mm audio adapter does neither, making it a great option for those who seek the best of both wired worlds – audio as well as charging.",
        cat:"technology"
    },
{
        id:30,
        heading:"X (formerly Twitter) set to introduce video and audio calling features",
        image:"https://images.indianexpress.com/2023/08/twitter-x-video-calling.jpg?w=640",
description:"As Twitter continues its transformation into X, CEO Linda Yaccarino, has confirmed that platform users will soon be able to make audio and video calls without sharing their phone numbers. During an interaction with CNBC, Linda confirmed that users can make calls within the Direct Message (DM) menu.Additionally, Andrea Conway, a design engineer at X, has shared a picture of the new DM menu featuring an option for making voice and video calls. The video calling option is located in the top right corner of the X’s DM menu, and its appearance resembles that of most platforms.According to Linda, unlike some platforms, X will not require its users to share their phone numbers to initiate voice or video calls. Furthermore, X will implement certain restrictions to prevent spam calls.",
        cat:"technology"
    },
{
        id:31,
        heading:"Best Independence Day gadget deals from Vijay Sales and Flipkart",
        image:"https://images.indianexpress.com/2023/08/independence-day-gadget-deals.jpg?w=640",
description:"As a part of Vijay Sale’s ongoing Mega Freedom Sale, the latest iPhone 14 (review) with 128 GB of storage will be available for Rs 69,900. Besides, the platform is also offering a flat Rs 4,000 cashback for HDFC card users with up to Rs 15,000 plus Rs 8,000 credit on exchanging an old smartphone, which will bring down the effective price of the iPhone 14 to just Rs 42,900.", 
       cat:"technology"
    },

{
        id:32,
        heading:"Android users may soon enjoy a feature Apple users have been enjoying for years",
        image:"https://images.indianexpress.com/2023/08/Pixel-FBBBB.jpg?w=640",
description:"Apple users often talk about how seamless connectivity is across the ecosystem. Users can easily switch between their iPhone, iPad, and Mac for various tasks, such as making and receiving calls, sharing files, and using apps.However, Android users may soon also enjoy similar features that will let them link their various Android devices together, according to a report by Android Authority. The report cites Android expert Mishaal Rahman, who posted about the potential feature on Twitter. Rahman claims that Google is working on a feature that will allow Android devices that are signed into the same Google account to communicate with each other.",
        cat:"technology"
    },
{
        id:33,
        heading:"How Google’s startup accelerator creates a safe space for women founders",
        image:"https://images.indianexpress.com/2023/08/google-startup-accelerator-featured.jpg?w:640",
description:"What’s common between Dr Geetha Manjunath, creator of a breakthrough AI solution for detecting early stage breast cancer and Dr Jo Aggrawal, the creator of Wysa, an AI chatbot that helps in improving people’s emotional resilience? Well, they were both backed by Google’s Start-up Accelerator programme that has been nurturing women entrepreneurs across India.Google’s dedicated accelerator for women founders addresses unique challenges like access to capital, finding tech co-founders, and leadership development. The programme has seen some success, with a strong peer group and support system for women from various backgrounds. Moreover, the representation of women founders has evolved over the years, growing from under 8 per cent to 30-35 per cent applicants. The dedicated women founders’ programme has helped improve these numbers.", 
       cat:"technology"
    },
{
        id:34,
        heading:"Alleged PS5 Slim leaked images and video suggest new console coming soon",
        image:"https://images.indianexpress.com/2023/08/PS5-FB-1.jpg?w:640",
description:"A new version of the PlayStation 5 may be on the way, according to some leaked images and a video. The PS5 Slim, as it is often called, is said to have a slimmer and slightly shorter design, with quite possibly a detachable disc drive.", 
       cat:"technology"
    },
    {
        id:36,
        heading:"Gym and tonic: Why working out makes you a sleeping beauty",
        image:"https://www.happiesthealth.com/wp-content/uploads/2022/12/Sleep-Exercise-article.jpg",
        description:"Sleep and exercise are said to be perfect bedfellows. A good night’s sleep can enhance workout performance, reduce the risk of injuries, and keep the body and muscles healthy. Lack of sleep, on the other hand, can weaken one’s immunity.",
        cat:"fitness"
    },
{
        id:37,
        heading:"Bodybuilder battling colorectal cancer encourages others to keep fighting",
        image:"https://www.happiesthealth.com/wp-content/uploads/2023/04/Julie-Lindsay-Afrticle-3-002.jpg",
        description:"Cancer can be unforgiving, but Australian female body builder Julie Lindsay continues to battle it with positive attitude and a brave face.",
        cat:"fitness"
    },
{
        id:38,
        heading:"Exercise addiction: When workouts consume life",
        image:"https://www.happiesthealth.com/wp-content/uploads/2023/08/Exercise-addiction-Article-002.jpg",
        description:"An uncontrollable urge to work out can send one into an unhappy spiral over time. It is important to be patient and set goals without compromising on happiness",
        cat:"fitness"
    },
{
        id:39,
        heading:"Gluteal amnesia: Is dead butt syndrome real?  ",
        image:"https://www.happiesthealth.com/wp-content/uploads/2023/08/Gluteal-amnesia-Article.jpg",
        description:"Strengthening your glutes and all the muscles around your hips is never a bad idea. It will also help improve general performance and quality of life.",
        cat:"fitness"
    },
{
        id:40,
        heading:"Embracing the heat: Sauna therapy for post-workout recovery",
        image:"https://www.happiesthealth.com/wp-content/uploads/2023/07/Embracing-the-heat-Sauna-therapy-for-post-workout-recovery-Article-003.jpg",
        description:"Elevated temperatures in a sauna enhance blood circulation and accelerate muscle repair, promoting quicker recovery",
        cat:"fitness"
    },
{
        id:41,
        heading:"Small steps every day: How to prevent ankle sprains",
        image:"https://www.happiesthealth.com/wp-content/uploads/2023/07/How-to-prevent-ankle-twists-or-sprains-Article-Anantha.jpg",
        description:"Ankle sprains occur when the ligaments surrounding the ankle joint are stretched or torn. Experts list precautions and exercises to keep them at bay",
        cat:"fitness"
    },
{
        id:42,
        heading:"Here’s your workout routine for night shifts",
        image:"https://www.happiesthealth.com/wp-content/uploads/2023/07/Workout-guide-for-night-shift-workers-Article-Anantha.jpg",
        description:"Having to work odd hours, especially night shifts, could offset many things in a person’s routine and habits with long and short-term implications on health. Working night shifts affects not just the daily routine or sleep cycle but impacts almost all physiological processes too.",
        cat:"fitness"
    },
{
        id:43,
        heading:"Crash diet: You lose a lot more than bodyweight",
        image:"https://www.happiesthealth.com/wp-content/uploads/2023/07/Crash-diet-and-health-implications-Article-002.jpg",
        description:"A diet aimed towards drastic weight loss by considerably reducing calorie intake can cause nutrient deficiencies, leading to several complications",
        cat:"fitness"
    },
{
        id:44,
        heading:"Debunking popular myths about diet and nutrition",
        image:"https://www.happiesthealth.com/wp-content/uploads/2023/07/Myth-buster-Rebecca-Raj-Article-Anantha.jpg",
        description:"While nutrition is one of the most discussed matters in personal healthcare, there is plenty of misinformation making rounds in the rumour mill that needs to be busted.",
        cat:"fitness"
    },
{
        id:45,
        heading:"Mind, body and self-defence: Intro to mixed martial arts",
        image:"https://www.happiesthealth.com/wp-content/uploads/2023/07/MMA-the-multidisciplinary-combat-sport-Article.jpg",
        description:"MMA blends several martial arts disciplines into a dynamic fighting system, which not just hones self-defence skills, but its training conditions the body as well as the mind",
        cat:"fitness"
    },
{
        id:46,
        heading:"Game, set and snack: How tennis players fuel performance",
        image:"https://www.happiesthealth.com/wp-content/uploads/2023/07/Tennis-player-mid-match-snack-Article.jpg",
        description:"Remember when tennis players would just eat bananas during breaks to maintain sustained energy? Well, the world has moved on (and packed snacks are no longer frowned upon)",
        cat:"fitness"
    },
{
        id:47,
        heading:"Walking vs running: Choose wisely",
        image:"https://www.happiesthealth.com/wp-content/uploads/2023/07/Walking-vs-running-How-to-choose-wisely-Article-Anantha-002.jpg",
        description:"While walking and running provide similar benefits, several health parameters need to be considered before choosing between the two",
        cat:"fitness"
    },
{
        id:48,
        heading:"Suspension training: Get fit while hanging out",
        image:"https://www.happiesthealth.com/wp-content/uploads/2023/07/Suspension-training-Article.jpg",
        description:"Suspension training, where a person works the muscles against gravity, improves strength, muscle mass and performance in both athletes and non-athletes",
        cat:"fitness"
    },
{
        id:49,
        heading:"Fitness guide for women post menopause",
        image:"https://www.happiesthealth.com/wp-content/uploads/2023/07/Fitness-guide-for-women-post-menopause-Article.jpg",
        description:"During menopause, hormonal changes can lead to fat accumulation and weight gain. Fitness routines and staying active can help women in weight management",
        cat:"fitness"
    },
{
        id:50,
        heading:"How to build quick reflexes to play sport like a pro",
        image:"https://www.happiesthealth.com/wp-content/uploads/2023/06/Quick-reflexes-and-sports-performance-Anantha-Anantha.jpg",
        description:"Quick reflexes and fast reaction time are not the same, but both are equally important for athletic performance and for avoiding injuries on the playing field",
        cat:"fitness"
    },
    
        {
            id:51,
            heading:"Exploring New Menus: Restaurants Redefining Culinary Experiences with Delish Flavours",
            image:"https://images.news18.com/ibnlive/uploads/2023/06/untitled-design-182-16869374693x2.png?impolicy=website&width=510&height=356",
            description:"Embark on a culinary journey as restaurants unveil exciting new menus that promise to tantalize your taste buds. Indulge in a medley of flavors and textures meticulously curated by talented chefs. Whether you’re a food aficionado or a small eater, these revamped menus offer a delectable array of options that cater to every palate. Get ready to savour fresh culinary delights that are set to elevate your dining adventures.",
            cat:"food"
        },
    {
            id:52,
            heading:"Peanut Butter Fusion: A Global Twist on Classic Dishes",
            image:"https://images.news18.com/ibnlive/uploads/2023/08/shutterstock_1829416040-16917276463x2.jpg?impolicy=website&width=510&height=356",
            description:"Schezwan Peanut Butter Noodles is a delightful fusion dish that combines the rich flavour of peanut butter with the powerful flavour of Schezwan sauce to create a fulfilling and pleasantly different noodle recipe. With a great balance of spiciness and nuttiness that will pique your taste buds, this simple recipe blends the best of both worlds.",
            cat:"food"
        },
    {
            id:53,
            heading:"19 Restaurants Serve up Independence Day Feasts",
            image:"https://images.news18.com/ibnlive/uploads/2023/08/untitled-design-101-16917703633x2.png?impolicy=website&width=510&height=356",
            description:"Celebrate Independence Day with enticing offers from Indian restaurants. Indulge in diverse flavors at unbeatable prices, as eateries nationwide embrace patriotism. From delectable tri-color themed buffets to special curated menus, experience India’s culinary heritage. Savor traditional delicacies while enjoying live entertainment and ambiance that reflects the spirit of the nation. Discounts, exclusive deals, and thematic decorations make this August 15th truly memorable. Join the celebration and relish the best of Indian cuisine with family and friends",
            cat:"food"
        },
    {
            id:54,
            heading:"Revitalize Your Body with the Best Monsoon Fruit Selection",
            image:"https://images.news18.com/ibnlive/uploads/2023/03/untitled-1-23-16790588873x2.jpg?impolicy=website&width=510&height=356",
            description:" monsoon season brings with it an abundance of fresh and nourishing fruits that are not only delicious but also offer a range of health benefits. From juicy papayas to crisp apples and exotic kiwis, these monsoon-focused fruits are packed with nutrients that can help boost your well-being. Join us as we explore a selection of handpicked fruits perfect for the rainy season. Varun Khurana, Founder & CEO, Otipy shares his knowledge about the handful of monsoon fruits along with their health benefits.",
            cat:"food"
        },
    {
            id:55,
            heading:"6 Lifestyle Changes That Will Help You Age Like A Fine Wine",
            image:"https://images.news18.com/ibnlive/uploads/2023/08/untitled-design-2023-08-04t184856.020-16911551463x2.jpg?impolicy=website&width=510&height=356",
            description:"Ageing like a fine wine is a compliment we all want to hear. Ageing is inevitable, one may get stressed on noticing their white or grey hair, wrinkles and sagging. Without surgery, it could be difficult to remove these signs. However, making several lifestyle changes can keep the signs of ageing in check. Here are the ways one can prevent the signs of ageing.",
            cat:"food"
        },
    {
        id:56,
        heading:"Chef Amninder Sandhu’s Bawri in Goa is all about age-old recipes and traditional cooking techniques",
        image:"https://th-i.thgim.com/public/life-and-style/g7424x/article67075039.ece/alternates/FREE_1200/Chef%20Amninder%20Sandhu%202.jpg",
        description:"More than two decades ago, when she was a hotel management trainee at the Taj Culinary School, Amninder Sandhu called her father to complain about the long working hours. “My father only had one thing to say — Ya toh naukri karo, ya nakhre karo. Dono cheezein ek saath nahi chalti (Either work, or complain; the two things don’t go together),” she chuckles.It is because of this kind of “dangerous training”, as she calls it, and her sincere love for cooking, that Amninder has managed to weather the many storms in her professional life. She had worked as the executive chef for two-and-a-half years in the famed Indian restaurant Arth in Bandra, the city’s first gas-free kitchen at the time, but it shut down in 2020. “I had serious PTSD after Arth shut down for reasons beyond my control. It was heartbreaking for me,” says Amninder. Then her delivery kitchen Iktara, which launched in 2021, ended up closing down as well.",
        cat:"food"
    },
{
        id:57,
        heading:"Zero-carbon beer, no-waste cocktails: how the alco-bev industry is turning green",
        image:"https://th-i.thgim.com/public/life-and-style/fashion/gamrle/article67123295.ece/alternates/LANDSCAPE_1200/Sustainability%20in%20packaging%20Bira91.png",
        description:"As bars across the country tweak menus to include zero-waste cocktails, the bigger breweries and distilleries are also looking to rewrite their scripts.World over, the spirits industry has set in motion, multi-pronged plans to address its soil, water, and energy footprints. As countries set ambitious targets to reduce greenhouse gas emissions, spirits manufacturers across India such as Bacardi, Bira91, Pernod Ricard, Piccadily Distilleries, and Anheuser Busch InBev,  have begun to step back and analyse ways in which they can reach carbon neutrality, by the halfway mark of the decade.",
        cat:"food"
    },
{
        id:58,
        heading:"Maayaa serves up South Indian coastal delights for office goers",
        image:"https://th-i.thgim.com/public/life-and-style/food/o2jjzl/article67180915.ece/alternates/LANDSCAPE_1200/1pic.jpeg",
        description:"Maayaa boasts a delightful ambience with tropical-inspired décor , adorned with captivating banana and palm tree wallpapers, elegant golden cane lamps, and plush velvet-clad orange sofas that are in harmony with the chic black-and-white flooring.Conveniently situated on the ground floor of a building that houses office spaces, the restaurant serves as a lunchtime haven for busy office goers. As a restaurant specialising in South Indian cuisine, it treats its patrons to a wide array of dishes from the coastal regions.Our table is set on an elevated wooden deck, with a live banana plant next to it. The ambience exudes charm with various intriguing elements, including a display of multi-coloured four-tiered tiffin boxes on a shelf, origami bird lights, and refurbished vintage cabinets.",
        cat:"food"
    },
{
        id:59,
        heading:"At Suryapet in the Hyderabad-Vijayawada highway, stopping here is a must",
        image:"https://th-i.thgim.com/public/incoming/hrk925/article67149754.ece/alternates/LANDSCAPE_1200/0Y7A7531.JPG",
        description:"For people travelling from Telangana to Andhra Pradesh, especially to Vijayawada, a pit stop at 7 Midway Plaza at Suryapet is a must. It was first established in 2009 with the aim of providing hygienic restrooms on NH-65. Why Suryapet? Raj Yarlagadda, chairman of People’s Combine, which is active in the service sector, narrates a childhood memory: “The travel time by bus from my village at Nujiveedu to Vijayawada was 60 minutes. The bus would stop midwayfor soda, water, cool drinks etc. So when we, as a company, observed the lack of hygienic rest rooms on the Hyderabad-Vijayawada highway, we chose Suryapet because it is exactly midway. Initially, our focus was on washrooms, food was secondary.",
        cat:"food"
    },
{
        id:60,
        heading:"Lazy Leopard in Gopalapuram aims to serve classic Neapolitan pizzas with spots and San Marzano tomatoes",
        image:"https://th-i.thgim.com/public/life-and-style/food/8q8va3/article67146151.ece/alternates/LANDSCAPE_1200/DHEE5183.jpg",
        description:"Lazy Leopard in Gopalapuram is Chennai’s latest pizzeria that aims to serve “almost authentic” Neapolitan pies. The pizzas here have spots. While this clarifies the leopard part, “Why lazy?” we ask. To which Kanishk Dhupad, consulting chef and owner says, “Our pizza dough is allowed to ferment for more than five days — a slow and lazy process.”The trattoria, which can seat 50, has indoor and outdoor settings, exposed brick walls, wooden chairs and tables, an open pizza kitchen with a teal-tiled wood fired oven. As non-intrusive Italian tunes are cued up, guests come in groups to share the most-shareable dish over selfies and conversations. ",
        cat:"food"
    },
{
        id:61,
        heading:"Chennai’s biryani ‘masters’ are experts at cooking massive feasts for thousands of people",
        image:"https://th-i.thgim.com/public/life-and-style/csnvit/article67151662.ece/alternates/FREE_1200/03mpHabi.jpg",
        description:"Deep within Chennai’s biryani heartland of Triplicane, a cauldron of biryani is starting to burn. “Remove it from the fire and place it on the floor,” M Lookman Ali instructs his team on the phone. He is far from perturbed. “Nothing will happen to it, we have caught it right on time,” he adds.The 54-year-old owns Amrin, a small biryani outlet on Triplicane High Road. In the business of biryani, he is known as ‘master’: a skilled cook trained to make biryani by the kilo with help from a team. These men command much respect in their circle; there are 500 of them in Triplicane alone, with an estimate of 50 each in Royapuram and Periamet, the other neighbourhoods popular for biryani.",
        cat:"food"
    },
{
        id:62,
        heading:"Chennai’s CakeWalk is back with a new cafe that serves their iconic chocolate truffle and breads in a new avatar",
        image:"https://th-i.thgim.com/public/life-and-style/fashion/axeemf/article67145735.ece/alternates/LANDSCAPE_1200/CakewalkCafe_Classic%20Marg%20Pizza.JPG",
        description:"If the metric for judging restaurants is by how well timeless dishes are made, CakeWalk Cafe seems to have figured out how to give its audience an easy bite of the classic margarita pizza.The trick is in getting the dough right, says Pooja Srinivasan who forms the second generation of this family business. They also have a new woodfired oven to ensure that the char is right and that the cheese melts the way it should.Pooja and her sister Kavya have walked the halls of CakeWalk, a bakery on Sterling Road, since it was opened by their father G Srinivasan, 33 years ago. They are familiar with the bakery’s nooks and crannies, its billing process, the recipe for their iconic chocolate truffle, and the staff who have worked there for years. “We used to spend all our time here, playing, doing homework. Now our children are doing the same,” says Pooja. Timelessness — especially in the realm of food — has been an integral part of their growing up years.",
        cat:"food"
    },
{
        id:63,
        heading:"Celebrating flavours of Tangra in Hyderabad",
        image:"https://th-i.thgim.com/public/incoming/ab29c9/article67141485.ece/alternates/FREE_1200/dimsum.jpeg",
        description:"Weather and food go hand in hand. As Hyderabadis enjoy the monsoon season, Chef Ye Chung Yuan aka Robert who hails from Tangra in Kolkata was dishing out food that complement the weather. Think juicy baos, Talumeinsoup, chilli chicken, mushroom hot pot, street-style hakka noodles, lamb chops and more. All this over the last weekend at Okra in Marriott Hyderabad at the Flavours of Tangra food showcase.Born in Tangra, 31-year-old Robert grew up relishing Tangra flavours. He took to cooking when just 19 years but his formal culinary training began when the family migrated to Siliguri . There, he started assisting in his father’s restaurant and observing all the specialities made. Robert says “I started learning specialities while working full-time with my father I wasn’t just his helper, he let me cook as he instructed. Unfortunately, after a year, my father passed away and when I wanted to take over the restaurant, my mother asked me if I was confident enough in my skills to run the family-owned restaurant and pay her a rent of ₹50,000.",
        cat:"food"
    },
{
        id:64,
        heading:"International Friendship's Day 2023: Ice Cream Flavors to Suit Every Type of Friend",
        image:"https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-2023-07-31t123324.830-16907870503x2.jpg?impolicy=website&width=510&height=356",
        description:"Friendship’s Day is a joyous celebration of the cherished bonds we share with our friends. And what better way to honor this special occasion than by indulging in the delightful world of ice cream treats together? Ice cream has a magical ability to bring people together, and with its wide array of tantalizing ice cream flavors and mouthwatering ice cream cakes, there’s something to please every type of friend. So, let’s embark on a delightful journey to discover the finest ice cream flavors and cakes, perfectly tailored to suit the taste of each friend, and make this Friendship’s Day an absolutely unforgettable experience for everyone in your circle!",
        cat:"food"
    },
{
        id:65,
        heading:"International Beer Day: 5 Exotic Beers From Around The World That You Must Try",
        image:"https://images.news18.com/ibnlive/uploads/2023/08/untitled-design-22-1-16911240373x2.png?impolicy=website&width=510&height=356",
        description:"It is International beer day and is truly the perfect day to celebrate beer’s uniqueness and exquisiteness. Beer is one alcoholic beverage that more or less everybody loves to indulge in, a lot of people even go on to consider it as an emotion and quite rightfully so. However, there is not much that we know about Beer and it is time to change that.If you are an ardent Beer lover then it is a must that you try all its varieties. Yes, you heard that absolutely right, beer has different shades to it that are available across the globe. Here are 5 exotic beers from across the continents that you absolutely must try out-",
        cat:"food"
    },
{
        id:66,
        heading:"8 Healthy And Authentic Indian Snacks One Must Savour This Monsoon Season",
        image:"https://images.news18.com/ibnlive/uploads/2023/08/untitled-design-12-16908642023x2.png?impolicy=website&width=510&height=356",
        description:"Even though monsoons can be tiresome and boring owing to the constant pouring and all the waterlogged roads that can be a cause of major hindrance, it for sure is special. Monsoons can bring about some of the best moments in life. And there’s nothing better than indulging in some great food on rainy days.However, for someone who is perhaps a fitness enthusiast, it is not at all convenient to snack to that extent. It is not at all that fitness enthusiasts do not crave snacks, they do but they always try and look for healthy alternatives. A lot of people do not believe in the fact that there are healthy Indian snacks available and one can easily find them on apps such as InsanelyGood grocery delivery app.",
        cat:"food"
    },
{
        id:67,
        heading:"Nuts About Flavour: 3 Irresistible Recipes with Pistachios",
        image:"https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-259-16907936603x2.png?impolicy=website&width=510&height=356",
        description:"Pistachios are versatile nuts that add a rich, nutty flavor to both sweet and savoury dishes. Crushed pistachios make a wonderful crust for meats or add a crunchy topping to salads. In desserts, they enhance the taste and presentation of cakes, cookies, and ice creams. Moreover, pistachios boast a nutritional profile, packed with protein, healthy fats, vitamins, and minerals. Whether as a complement to a main course or a starring ingredient in desserts, incorporating pistachios into recipes elevates the culinary experience with their distinct taste and added nutritional value.",
        cat:"food"
    },
{
        id:68,
        heading:"National Avocado Day 2023: 3 Delicious Avocado Recipes You Must Try Today",
        image:"https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-261-16907943553x2.png?impolicy=website&width=510&height=356",
        description:"National Avocado Day, celebrated on July 31st, honours the beloved fruit renowned for its creamy texture and numerous health benefits. This occasion encourages people worldwide to indulge in delicious avocado dishes, from guacamole to smoothies, while appreciating the fruit’s versatility and contribution to a balanced diet. Avocado enthusiasts unite in celebration! We have rounded 3 avocado recipes for you to try.  ",
        cat:"food"
    },
{
        id:69,
        heading:"Summer's Golden Gems: Unleash the Magic of Corn with These Recipes",
        image:"https://images.news18.com/ibnlive/uploads/2023/07/untitled-design-226-16904450073x2.png?impolicy=website&width=510&height=356",
        description:"Indulge in the essence of summer with these delightful corn recipes! Bursting with sweet and juicy flavors, these dishes promise to be your go-to summer treats. From grilled corn on the cob with zesty toppings to refreshing corn salads, savour the season’s bounty with every delectable bite. Check out these delectable recipes from Chef Sohail Karimi, Executive chef, Radisson Blu Resort and convention Centre Karjat:",
        cat:"food"
    },
{
        id:70,
        heading:"4 Unusual Cocktail Recipes You Should Try At Home This Weekend",
        image:"https://images.news18.com/ibnlive/uploads/2023/07/10-16899479643x2.png?impolicy=website&width=510&height=356",
        description:"It’s Friday night and the weekend has already set in, there is a set of people who are diligently chalking out where to go to all weekend while the other set just wants to sit at home and chill. Well, truth be told you can always chill in the comfort of your home and if you want you can always call your friends over. Going out and clubbing does get a little hyped after a certain point and is way too expensive too if you are trying to save.",
        cat:"food"
    },
{
id:71,
heading:"Lindsay Lohan Shares First Pic After Birth Of Baby Boy: I m A Postpartum Mom",
image:"https://c.ndtvimg.com/2023-08/jpoi1htg_lindsay_625x300_03_August_23.jpg  ",
description:"New Delhi: Lindsay Lohan, who welcomed a baby boy last month, shared a postpartum picture of herself on her Instagram profile. She wrote in her caption, I am so proud of what this body was able to accomplish during these months of pregnancy and now, recovery. Having a baby is the greatest joy in the world. Later in her caption, the actress also made a reference to her iconic 2004 comedy film Mean Girls and she wrote, Because I'm not a regular mom, I'm a postpartum mom. Lindsay tweaked a dialogue from the film - the one where Regina George's mom says, I'm not a regular mom. I am a cool mom. We got you, Cady.",
cat:"hollywood"
},
{
        id:72,
        heading:"Wonder Woman 3: DC Has No Immediate Plans For The Film",
        image:"https://c.ndtvimg.com/2023-08/1b5fdt6g_gal-gadot_625x300_11_August_23.jpg",
        description:"Los Angeles: Despite Hollywood star Gal Gadot's recent comments about Wonder Woman 3, DC Studios is reportedly not looking to make the third chapter in the movie series anytime soon. Multiple sources told news outlet Variety that Wonder Woman 3 is not in development at DC Studios. In a recent interview, Gal Gadot had claimed that DC Studios heads James Gunn and Peter Safran told her they would develop Wonder Woman 3 together.",
        cat:"hollywood"
        },
        {
                id:73,
                heading:"Inside Michelle Yeoh's Birthday Celebrations With Husband Jean Todt",
                image:"https://c.ndtvimg.com/2023-08/nmgdgbno_michelle-yeoh_625x300_11_August_23.jpg",
                description:"New Delhi: Oscar-winning actress Michelle Yeoh celebrated her birthday on August 6. She turned 61. The actress has also shared pictures from her “amazing” birthday celebration on Instagram. The opening frame features Michelle Yeoh cutting the giant birthday cake. She looks cute in the pink birthday hat. In the next frame, she is sharing the frame with her husband, former Ferrari CEO Jean Todt. The couple got married earlier this month. Along with the happy pictures on Instagram, the actress wrote, “What an amazing birthday…Thank you, thank you.” She has also added pink hearts and a smiling face with heart emojis.",
                cat:"hollywood"
                },
                {
                        id:74,
                        heading:"Ashley Olsen Secretly Welcomes 1st Child With Husband Louis Eisner",
                        image:"https://hollywoodlife.com/wp-content/uploads/2023/08/ashley-olsen-welcomes-first-child-ss-ftr.jpg?resize=768%2C432",
                        description:"Ashely Olsen is reportedly a mom! TMZ reports on Monday, Aug 14, that the Full House star and fashion designer, 37, welcomed an infant son, named Otto, with husband Louis Eisner. The big event happened “a few months ago,” according to the outlet, in New York. Sources for TMZ added that “they’re ecstatic over the new addition to the fam.” Ashley and Louis married back in December, in a private ceremony, with news of the union not emerging until January.",
                        cat:"hollywood"
                        },
                        {
                                id:75,
                                heading:"Mark Zuckerberg and Priscilla Chan Sell San Francisco Home for $31 Million",
                                image:"https://images.mansionglobal.com/im-590516?width=1299&size=1.4988290398126465&pixel_ratio=1.5",
                                description:"Mark Zuckerberg and Priscilla Chan have sold one of their San Francisco homes for $31 million in an off-market deal, a spokesperson for the family confirmed. The deal marks the most expensive sale in San Francisco so far this year, according to Zilllow. Built in 1928, the 7,386-square-foot home has four bedrooms and four bathrooms, and is on the edge of the Mission District and Dolores Heights neighborhoods of the city. The sale closed on July 1, but records of the transaction have just become publicly available. The Facebook-cum-Meta co-founder, 38, and his wife, 37, purchased the home in 2012 for just under $10 million through a California-based limited liability company, SFRP, according to records with PropertyShark. A grant deed between the seller and the buyer was signed on SFRP’s behalf by Na’eem Salaam, the vice president of operations of the Chan Zuckerberg Initiative.",
                                cat:"hollywood"
                                },
                                {
                                        id:76,
                                        heading:"The Blind Side subject Michael Oher says his ‘adoption’ was a lie, 'parents' exploited him",
                                        image:"https://www.hindustantimes.com/ht-img/img/2023/08/15/550x309/michael_oher_the_blind_side_1692081165105_1692081165302.jpg",
                                        description:"Michael Oher, the former NFL tackle known for being the inspiration for the movie The Blind Side, filed a petition Monday in a Tennessee probate court accusing Sean and Leigh Anne Tuohy of lying to him by having him sign papers making them his conservators rather than his adoptive parents nearly two decades ago.",
                                        cat:"hollywood"
                                        },
                                        {
                                                id:77,
                                                heading:"Bruce Willis' wife Emma Heming Willis opens up on dealing with the actor's ‘dementia’ and her care partner role",
                                                image:"https://www.hindustantimes.com/ht-img/img/2023/08/15/550x309/Emma_Heming_Willis_1692091957784_1692092020512.jpg",
                                                description:"Bruce Willis' wife Emma Heming Willis has given fans an idea of the Hollywood star's ongoing struggle with dementia. In an emotional update on Instagram, Emma talked about how her husband's health condition affects her life while she acts as a care partner to him. She highlighted that she tries her best to be a good care partner to Bruce amid his deteriorating health.",
                                                cat:"hollywood"
                                                },
                                                {
                                                        id:78,
                                                        heading:"Jamie Foxx on a mission to revive old love with Katie Holmes; Will it be possible? Here's what sources reveal",
                                                        image:"https://www.pinkvilla.com/images/2023-08/646354806_1347194924_1947501558_screenshot-2023-07-22-at-1-12-23-am.jpg",
                                                        description:"As Foxx sets his sights on a potential reunion, the question remains: Will Katie Holmes reciprocate his aspirations? Observers note that Holmes' reaction to Foxx's hospitalization earlier this year speaks volumes about her feelings. Despite any past differences, her genuine concern and worry over Foxx's health underscore a lingering emotional connectionKatie is worried sick about Jamie, an insider expressed to RadarOnline in April following Foxx's hospitalization, revealing that she had been reaching out to mutual friends in an attempt to gather information.",
                                                        cat:"hollywood"
                                                        },
{
   id:79,
  heading:"Priyanka Chopra Sizzles In Stunning Bralette, Black Skirt; Actress Showers Love On Her 'Magnet' Nick Jonas: Pics",
   image:"https://english.cdn.zeenews.com/sites/default/files/2023/08/14/1262675-1.jpg",
     description:"Taking to Instagram, she wrote, You are a magnet @nickjonas MM and I are so lucky to have you. Congratulations on the start of an incredible tour. You’re all in for a huge ride! Let’s gooooo! Great job JB team the Band, the crew. The show was seamless and awe inspiring. Round 2 tonight.",
     cat:"hollywood"
 },
 {
id:80,
heading:"Twitterati hail Alia Bhatt's Indian accent in Heart Of Stone ;take a dig at Priyanka Chopra's 'fake accent' in Hollywood movies",
image:"https://static.toiimg.com/thumb/msid-102724313,imgsize-78678,width-400,resizemode-4/102724313.jpg",
description:"Alia Bhatt, the Bollywood actress, made her Hollywood debut  in the spy movie 'Heart Of Stone', alongside Gal Gadot and Jamie Dornan. The film skipped a theatrical release for a digital release. Bhatt played the antagonist Keya Dhawan, who goes up against Gal.While Other Indian stars featured in international projects ,Bhatt played the role of south asian heritage and stuck to indian accent",
cat:"hollywood"
},
{
id:81,
heading:"Hollywood Strike Hits 100 Days: Writers Slam Milestone Of Shame",
image:"https://c.ndtvimg.com/2023-08/hrpr6ec_wga_625x300_10_August_23.jpg",
description:"Los Angeles: Hollywood writers marked the 100th day of their industry-crippling strike Wednesday, dubbing the occasion a milestone of shame for studios as the two sides remain deadlocked. Since early May, the Writers Guild of America walkout has brought countless film shoots and productions to a halt, costing the California economy millions of dollars each day, but the two sides have barely spoken.",
cat:"hollywood"
},
{
        id:82,
        heading:"Sandra Bullock's Longtime Partner Bryan Randall Dies After Battling ALS For 3 Years",
        image:"https://c.ndtvimg.com/2023-08/eia4n2l_alia-_625x300_08_August_23.jpg",
        description:"Los Angeles: Hollywood star Sandra Bullock's longtime partner Bryan Randall has died after a three-year private battle with amyotrophic lateral sclerosis (ALS). He was 57.In a statement, the model-turned-photographer's family said Randall passed away peacefully on August 5. Bryan chose early to keep his journey with ALS private and those of us who cared for him did our best to honour his request.We are immensely grateful to the tireless doctors who navigated the landscape of this illness with us and to the astounding nurses who became our roommates, often sacrificing their own families to be with ours,the statement read.",
        cat:"hollywood"
        },
{
id:83,
heading:"The Life And Times Of The Exorcist Director William Friedkin",
image:"https://c.ndtvimg.com/2023-08/gm3clc5o_william-friedkin_625x300_08_August_23.jpg",
description:"US director William Friedkin, who died Monday, will forever be remembered for his Oscar-winning The Exorcist in 1973, one of the most controversial horror films of all time that still chills new generations of moviegoers. The taboo-breaking scene of a 12-year-old girl, believed to be possessed by the devil, foul-mouthed and feverishly masturbating with a crucifix on her bed, provoked frenzy in audiences and sparked a global debate about the occult in the Catholic Church.",
cat:"hollywood"
},
{
id:84,
heading:"Natalie Portman And Benjamin Millepied Separate After 11 Years Of Marriage: Report",
image:"https://c.ndtvimg.com/2023-08/f0nhehag_natalie-_625x300_08_August_23.jpg",
description:"New Delhi: Black Swan actor Natalie Portman and her husband Benjamin Millepied have parted ways after 11 years of marriage, according to a report by Us Weekly. The estranged couple are parents to a son Aleph (12) and a daughter Amalia (6). On their 11th marriage anniversary (August 4),  Natalie Portman was spotted without her wedding ring during an Angel City FC event in Sydney, Australia and this inicident sparked their separation rumours one more time after June. In June there were rumours that Benjamin Millepied was having an affair with Camille Etienne, a 25-year-old climate activist.",
cat:"hollywood"
},
{
id:85,
heading:"Hollywood Strike: Writers To Resume Talks With Studios",
image:"https://c.ndtvimg.com/2023-08/kf4cmf4_hollywood-strike-_625x300_03_August_23.jpg",
description:"Los Angeles: Hollywood studios will meet with writers this week to discuss reopening talks for the first time since a strike began nearly 100 days ago. The Writers Guild of America (WGA) walkout, which kicked off May 2 over pay and the threat of artificial intelligence, has brought US film and television production to a halt.",
cat:"hollywood"
},


]

module.exports=Data