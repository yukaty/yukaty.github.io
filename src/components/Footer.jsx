const Footer = () => {

  return (
    <footer className="py-6 bg-light-primary dark:bg-dark-bg text-light-bg dark:text-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm">
          © {new Date().getFullYear()} Yuka Tamura
        </div>
      </div>
    </footer>
  );
};

export default Footer;