const SkillBadge = ({ skill }) => {
    return (
        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
        {skill}
        </span>
    );
};

export default SkillBadge;