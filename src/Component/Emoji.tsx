const Emoji: React.FC<{ emoji: string; label: string }> = ({ emoji, label }) => (
    <div className="flex flex-col items-center cursor-pointer">
      <span className="text-2xl">{emoji}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
  
  export default Emoji;
  