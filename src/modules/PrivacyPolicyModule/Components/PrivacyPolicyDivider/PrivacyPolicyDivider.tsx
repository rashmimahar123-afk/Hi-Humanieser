function PrivacyPolicyDivider() {
  return (
    <div className="flex gap-3">
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="w-2 h-2 rounded-full border border-[#0F4C5C]"
        />
      ))}
    </div>
  );
}

export default PrivacyPolicyDivider;
