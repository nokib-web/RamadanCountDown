const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full transition-colors duration-500 bg-slate-50 dark:bg-black">
            {/* Dark Mode: Space Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 dark:opacity-60 transition-opacity duration-500"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
            />

            {/* Dark Mode Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 opacity-0 dark:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 dark:opacity-100 transition-opacity duration-500" />

            {/* Light Mode: Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:opacity-0 transition-opacity duration-500" />
        </div>
    );
};

export default Background;
