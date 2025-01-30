import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" }}
      className="group relative h-[320px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-white/20 to-purple-500/10 p-px"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col justify-between rounded-2xl bg-blue-950/50 p-8 backdrop-blur-xl">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 text-blue-950 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-blue-300">
            {title}
          </h3>
          <p className="text-blue-200/80 line-clamp-3">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}
