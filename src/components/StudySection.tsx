// import { motion } from 'framer-motion';
// import { useState } from 'react';

const StudySection = () => {
  
}
// const StudySection = () => {
//   const [activeCard, setActiveCard] = useState<string | null>(null);

//   const textResources = [
//     { name: 'w3schools', url: 'https://www.w3schools.com/' },
//     { name: 'interviewbit', url: 'https://www.interviewbit.com/' },
//     { name: 'sanfoundry', url: 'https://www.sanfoundry.com/' },
//   ];

//   // Replace these with your actual system design images
//   // You can add images to the public folder and reference them like: '/system-design-1.png'
//   const systemDesignImages = [
//     'https://via.placeholder.com/800x400/1a1a2e/00d9ff?text=System+Design+Diagram+1',
//     'https://via.placeholder.com/800x400/1a1a2e/00d9ff?text=System+Design+Diagram+2',
//     'https://via.placeholder.com/800x400/1a1a2e/00d9ff?text=System+Design+Diagram+3',
//   ];

//   const youtubeChannels = [
//     { name: 'Piyush Garg', url: 'https://www.youtube.com/@PiyushGargDev' },
//     { name: 'Hitesh Choudhary', url: 'https://www.youtube.com/@HiteshChoudharydotcom' },
//     { name: 'Telusko', url: 'https://www.youtube.com/@telusko' },
//     { name: 'Selenium Express', url: 'https://www.youtube.com/@SeleniumExpress' },
//     { name: 'Codebasics', url: 'https://www.youtube.com/@codebasics' },
//     { name: 'Javatechie', url: 'https://www.youtube.com/@Javatechie' },
//   ];

//   const randomVideos = [
//     { name: 'System design', url: 'https://www.youtube.com/watch?v=fkQUkZRFq8g' },
//     { name: 'Toon', url: 'https://www.youtube.com/watch?v=1WrLLEO50gw&t=11s' },
//     { name: 'Langchain', url: 'https://www.youtube.com/watch?v=Vx1uhkR-pLs&t=265s' },
//   ];

//   const practicePlatforms = [
//     { name: 'HackerRank', url: 'https://www.hackerrank.com/' },
//     { name: 'HackerEarth', url: 'https://www.hackerearth.com/' },
//     { name: 'LeetCode', url: 'https://leetcode.com/' },
//     { name: 'CodeChef', url: 'https://www.codechef.com/' },
//   ];

//   const cards = [
//     { id: 'text', title: 'Text', icon: '📚', color: 'hsl(185, 100%, 50%)' },
//     { id: 'images', title: 'Images', icon: '🖼️', color: 'hsl(280, 100%, 65%)' },
//     { id: 'videos', title: 'Videos', icon: '🎥', color: 'hsl(45, 100%, 50%)' },
//     { id: 'practice', title: 'Practice', icon: '💪', color: 'hsl(120, 60%, 45%)' },
//   ];

//   const renderContent = () => {
//     if (!activeCard) return null;

//     switch (activeCard) {
//       case 'text':
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="space-y-4"
//           >
//             <h3 className="text-2xl font-bold mb-4">Text Resources</h3>
//             <ul className="space-y-3">
//               {textResources.map((resource, index) => (
//                 <motion.li
//                   key={resource.name}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <a
//                     href={resource.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-3 p-4 glass-card rounded-xl hover:border-primary transition-colors duration-300 group"
//                   >
//                     <span className="text-2xl">{index + 1}.</span>
//                     <span className="font-medium group-hover:text-primary transition-colors">
//                       {resource.name}
//                     </span>
//                     <span className="ml-auto text-muted-foreground group-hover:text-primary">
//                       →
//                     </span>
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         );

//       case 'images':
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="space-y-4"
//           >
//             <h3 className="text-2xl font-bold mb-4">System Design Images</h3>
//             <div className="grid md:grid-cols-3 gap-4">
//               {systemDesignImages.map((image, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="glass-card rounded-xl overflow-hidden"
//                 >
//                   <img
//                     src={image}
//                     alt={`System Design ${index + 1}`}
//                     className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         );

//       case 'videos':
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="space-y-6"
//           >
//             <h3 className="text-2xl font-bold mb-4">YouTube Channels</h3>
//             <ul className="space-y-3">
//               {youtubeChannels.map((channel, index) => (
//                 <motion.li
//                   key={channel.name}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <a
//                     href={channel.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-3 p-4 glass-card rounded-xl hover:border-primary transition-colors duration-300 group"
//                   >
//                     <span className="text-2xl">{String.fromCharCode(97 + index)}.</span>
//                     <span className="font-medium group-hover:text-primary transition-colors">
//                       {channel.name}
//                     </span>
//                     <span className="ml-auto text-muted-foreground group-hover:text-primary">
//                       →
//                     </span>
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>

//             <div className="mt-8">
//               <h4 className="text-xl font-bold mb-4">Random Videos</h4>
//               <ul className="space-y-3">
//                 {randomVideos.map((video, index) => (
//                   <motion.li
//                     key={video.name}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: (youtubeChannels.length + index) * 0.1 }}
//                   >
//                     <a
//                       href={video.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-3 p-4 glass-card rounded-xl hover:border-primary transition-colors duration-300 group"
//                     >
//                       <span className="font-medium group-hover:text-primary transition-colors">
//                         {video.name}
//                       </span>
//                       <span className="ml-auto text-muted-foreground group-hover:text-primary">
//                         →
//                       </span>
//                     </a>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         );

//       case 'practice':
//         return (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="space-y-4"
//           >
//             <h3 className="text-2xl font-bold mb-4">Practice Platforms</h3>
//             <ul className="space-y-3">
//               {practicePlatforms.map((platform, index) => (
//                 <motion.li
//                   key={platform.name}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <a
//                     href={platform.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-3 p-4 glass-card rounded-xl hover:border-primary transition-colors duration-300 group"
//                   >
//                     <span className="text-2xl">{index + 1}.</span>
//                     <span className="font-medium group-hover:text-primary transition-colors">
//                       {platform.name}
//                     </span>
//                     <span className="ml-auto text-muted-foreground group-hover:text-primary">
//                       →
//                     </span>
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <section id="study" className="py-24 relative">
//       <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <motion.span
//             className="text-primary font-mono text-sm tracking-wider"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             {"// LEARNING RESOURCES"}
//           </motion.span>
//           <h2 className="section-title mt-4">
//             Study <span className="text-gradient">Resources</span>
//           </h2>
//           <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
//             Click on a card to explore learning resources
//           </p>
//         </motion.div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
//           {cards.map((card, index) => (
//             <motion.div
//               key={card.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <motion.button
//                 onClick={() => setActiveCard(activeCard === card.id ? null : card.id)}
//                 className={`w-full glass-card rounded-2xl p-6 text-center transition-all duration-300 ${
//                   activeCard === card.id
//                     ? 'border-2 border-primary glow-primary'
//                     : 'hover:border-primary/50'
//                 }`}
//                 whileHover={{ y: -5, scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 style={{
//                   background:
//                     activeCard === card.id
//                       ? `linear-gradient(135deg, ${card.color}20, ${card.color}10)`
//                       : undefined,
//                 }}
//               >
//                 <div className="text-4xl mb-3">{card.icon}</div>
//                 <h3 className="text-lg font-semibold">{card.title}</h3>
//               </motion.button>
//             </motion.div>
//           ))}
//         </div>

//         {/* Content Display */}
//         {activeCard && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="glass-card rounded-2xl p-8"
//           >
//             {renderContent()}
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default StudySection;
