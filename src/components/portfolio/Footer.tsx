const Footer = () => (
  <footer className="py-8 border-t border-border bg-background">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Dinesh Portfolio. All Rights Reserved.</p>
      <p>Crafted with <span className="gradient-text font-bold">passion</span> in Chennai</p>
    </div>
  </footer>
);

export default Footer;
