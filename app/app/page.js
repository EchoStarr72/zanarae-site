export default function ZanaraeCalmStartupSite() {
  const products = [
    {
      title: 'The 5-Minute Reset',
      price: '$2.99',
      description:
        'A soft digital calm card for overwhelmed minds who need a gentle return to the present moment.',
    },
    {
      title: 'Grounded Mantra Visual',
      price: '$3.99',
      description:
        'A printable visual reminder: I earn honestly. I build slowly. I create something real.',
    },
    {
      title: 'Light Memory Calm Card',
      price: '$3.99',
      description:
        'A mysterious, orb-inspired visual for quiet reflection, softness, and emotional grounding.',
    },
  ];

  const steps = [
    'Create 1 calming digital product.',
    'Export it as PNG or PDF.',
    'List it on Etsy or Gumroad.',
    'Share your message honestly.',
    'Build slowly and keep it real.',
  ];

  const values = [
    'Earn honestly',
    'Create calm',
    'Help overwhelmed minds',
    'Build slowly',
    'Stay gentle and real',
  ];

  const styles = {
    page: {
      minHeight: '100vh',
      color: '#f8fafc',
      background:
        'linear-gradient(180deg, #020617 0%, #082f49 45%, #0f172a 100%)',
      fontFamily:
        'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
    },
    container: {
      maxWidth: '1120px',
      margin: '0 auto',
      padding: '0 24px',
    },
    hero: {
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 0 48px',
    },
    glowOne: {
      position: 'absolute',
      left: '5%',
      top: '50px',
      width: '220px',
      height: '220px',
      borderRadius: '999px',
      background: 'rgba(125, 211, 252, 0.22)',
      filter: 'blur(60px)',
    },
    glowTwo: {
      position: 'absolute',
      right: '8%',
      top: '60px',
      width: '280px',
      height: '280px',
      borderRadius: '999px',
      background: 'rgba(253, 230, 138, 0.18)',
      filter: 'blur(70px)',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1,
    },
    badge: {
      display: 'inline-block',
      padding: '8px 14px',
      borderRadius: '999px',
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(255,255,255,0.12)',
      color: '#e0f2fe',
      fontSize: '14px',
      letterSpacing: '0.03em',
    },
    h1: {
      fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
      lineHeight: 1.06,
      margin: '18px 0 16px',
      fontWeight: 700,
    },
    lead: {
      maxWidth: '560px',
      color: '#cbd5e1',
      fontSize: '1.1rem',
      lineHeight: 1.8,
      marginBottom: '26px',
    },
    card: {
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: '28px',
      padding: '24px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
      backdropFilter: 'blur(10px)',
    },
    mantraLabel: {
      color: '#bae6fd',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      fontSize: '12px',
      marginBottom: '12px',
    },
    mantraText: {
      fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
      lineHeight: 1.5,
      fontStyle: 'italic',
      margin: 0,
    },
    buttonRow: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      marginTop: '20px',
    },
    primaryBtn: {
      display: 'inline-block',
      background: '#ffffff',
      color: '#0f172a',
      borderRadius: '18px',
      padding: '14px 18px',
      textDecoration: 'none',
      fontWeight: 600,
    },
    secondaryBtn: {
      display: 'inline-block',
      background: 'rgba(255,255,255,0.08)',
      color: '#ffffff',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: '18px',
      padding: '14px 18px',
      textDecoration: 'none',
      fontWeight: 600,
    },
    heroPreview: {
      maxWidth: '430px',
      margin: '0 auto',
      ...{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '30px',
        padding: '24px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        backdropFilter: 'blur(10px)',
      },
    },
    previewInner: {
      borderRadius: '24px',
      padding: '32px',
      textAlign: 'center',
      background:
        'linear-gradient(180deg, rgba(186,230,253,0.16) 0%, rgba(253,230,138,0.08) 50%, rgba(103,232,249,0.08) 100%)',
    },
    orb: {
      width: '112px',
      height: '112px',
      borderRadius: '999px',
      margin: '0 auto 24px',
      background:
        'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.8), rgba(125,211,252,0.16) 35%, rgba(255,255,255,0.06) 65%)',
      border: '1px solid rgba(255,255,255,0.2)',
      boxShadow: 'inset 0 0 40px rgba(255,255,255,0.1)',
    },
    section: {
      padding: '20px 0 70px',
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
      gap: '14px',
    },
    valueCard: {
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '20px',
      padding: '16px',
      textAlign: 'center',
      color: '#e2e8f0',
    },
    sectionHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'end',
      gap: '20px',
      flexWrap: 'wrap',
      marginBottom: '30px',
    },
    sectionEyebrow: {
      color: '#bae6fd',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      fontSize: '12px',
      marginBottom: '10px',
    },
    h2: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      margin: 0,
    },
    subtext: {
      maxWidth: '560px',
      color: '#cbd5e1',
      lineHeight: 1.8,
      margin: 0,
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '22px',
    },
    productCard: {
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '30px',
      padding: '22px',
      boxShadow: '0 18px 45px rgba(0,0,0,0.2)',
    },
    productVisual: {
      height: '160px',
      borderRadius: '24px',
      marginBottom: '20px',
      background:
        'linear-gradient(135deg, rgba(186,230,253,0.18) 0%, rgba(253,230,138,0.08) 50%, rgba(103,232,249,0.12) 100%)',
    },
    rowBetween: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '12px',
    },
    price: {
      background: 'rgba(255,255,255,0.08)',
      borderRadius: '999px',
      padding: '6px 12px',
      color: '#e0f2fe',
      fontSize: '14px',
    },
    productText: {
      color: '#cbd5e1',
      lineHeight: 1.75,
      fontSize: '0.97rem',
      marginTop: '14px',
    },
    outlineBtn: {
      marginTop: '18px',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.12)',
      background: 'rgba(255,255,255,0.08)',
      color: '#fff',
      padding: '10px 14px',
      display: 'inline-block',
      textDecoration: 'none',
      fontWeight: 600,
    },
    twoCol: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
    },
    stepCard: {
      display: 'flex',
      alignItems: 'start',
      gap: '14px',
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '20px',
      padding: '16px',
      marginBottom: '14px',
    },
    stepBadge: {
      width: '36px',
      height: '36px',
      borderRadius: '999px',
      background: '#ffffff',
      color: '#0f172a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      flexShrink: 0,
    },
    closing: {
      maxWidth: '820px',
      margin: '0 auto',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.glowOne} />
        <div style={styles.glowTwo} />
        <div style={styles.container}>
          <div style={styles.grid}>
            <div>
              <div style={styles.badge}>Zanarae · Calm for overwhelmed minds</div>
              <h1 style={styles.h1}>Build something real, gentle, and worth sharing.</h1>
              <p style={styles.lead}>
                A soft digital brand built around calm visuals, honest words, and grounding tools that help people breathe again.
              </p>

              <div style={styles.card}>
                <div style={styles.mantraLabel}>Grounded mantra</div>
                <p style={styles.mantraText}>“I earn honestly. I build slowly. I create something real.”</p>
              </div>

              <div style={styles.buttonRow}>
                <a href="#products" style={styles.primaryBtn}>View Products</a>
                <a href="#start" style={styles.secondaryBtn}>Start Here</a>
              </div>
            </div>

            <div style={styles.heroPreview}>
              <div style={styles.previewInner}>
                <div style={styles.orb} />
                <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>The 5-Minute Reset</h2>
                <p style={{ color: '#e2e8f0', lineHeight: 1.75 }}>
                  Pause. You are safe right now. Nothing needs to be solved in this moment.
                </p>
                <div style={{ ...styles.card, marginTop: '22px', textAlign: 'left', padding: '18px' }}>
                  <p>Breathe in slowly.</p>
                  <p>Feel your hands.</p>
                  <p>Name 3 things you can see.</p>
                  <p>You are here. That is enough for now.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.valuesGrid}>
            {values.map((value) => (
              <div key={value} style={styles.valueCard}>{value}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div>
              <div style={styles.sectionEyebrow}>Digital products</div>
              <h2 style={styles.h2}>Your first small, honest offerings</h2>
            </div>
            <p style={styles.subtext}>
              Start simple. One helpful product is enough to begin building trust, momentum, and income.
            </p>
          </div>

          <div style={styles.productGrid}>
            {products.map((product) => (
              <div key={product.title} style={styles.productCard}>
                <div style={styles.productVisual} />
                <div style={styles.rowBetween}>
                  <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{product.title}</h3>
                  <span style={styles.price}>{product.price}</span>
                </div>
                <p style={styles.productText}>{product.description}</p>
                <a href="#" style={styles.outlineBtn}>Add Listing</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="start" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.twoCol}>
            <div style={styles.card}>
              <div style={styles.sectionEyebrow}>Simple startup path</div>
              <h2 style={styles.h2}>What to do first</h2>
              <div style={{ marginTop: '26px' }}>
                {steps.map((step, index) => (
                  <div key={step} style={styles.stepCard}>
                    <div style={styles.stepBadge}>{index + 1}</div>
                    <div style={{ paddingTop: '5px', color: '#e2e8f0' }}>{step}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.sectionEyebrow}>Ready-made copy</div>
              <h2 style={styles.h2}>Brand message</h2>
              <div style={{ marginTop: '22px', color: '#cbd5e1', lineHeight: 1.8 }}>
                <p>
                  Zanarae creates gentle digital tools for overwhelmed minds — soft reminders, calming visuals, and grounding words that help people return to themselves.
                </p>
                <p>
                  Built slowly. Shared honestly. Made for people who need calm, not pressure.
                </p>
              </div>
              <div style={{ ...styles.card, marginTop: '26px', background: 'rgba(2,6,23,0.35)' }}>
                <div style={styles.sectionEyebrow}>First listing title</div>
                <div style={{ fontSize: '1.08rem' }}>5-Minute Reset – Calm Mind Digital Download</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...styles.section, paddingBottom: '90px' }}>
        <div style={styles.container}>
          <div style={{ ...styles.card, ...styles.closing }}>
            <div style={styles.sectionEyebrow}>Closing note</div>
            <h2 style={styles.h2}>You are not behind. You are building properly.</h2>
            <p style={{ ...styles.subtext, margin: '16px auto 0' }}>
              This space is for honest earning, soft creation, and real progress. One product. One step. One calm beginning at a time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
