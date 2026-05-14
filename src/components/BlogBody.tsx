interface BlogBodyProps {
  html: string
}

export default function BlogBody({ html }: BlogBodyProps) {
  return (
    <>
      <style>{`
        .blog-body { color: rgba(255,255,255,0.65); font-size: 17px; line-height: 1.85; }
        .blog-body h2 {
          font-size: clamp(20px, 2.4vw, 28px);
          font-weight: 900;
          letter-spacing: -1px;
          line-height: 1.15;
          color: #fff;
          margin-top: 52px;
          margin-bottom: 18px;
        }
        .blog-body h3 {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.3px;
          color: #d4f179;
          margin-top: 32px;
          margin-bottom: 12px;
        }
        .blog-body p { margin-bottom: 18px; }
        .blog-body strong { color: rgba(255,255,255,0.9); font-weight: 700; }
        .blog-body a { color: #d4f179; text-decoration: underline; text-underline-offset: 3px; }
        .blog-body a:hover { color: #fff; }
        .blog-body ul { margin-bottom: 20px; padding-left: 0; list-style: none; }
        .blog-body ul li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 10px;
          color: rgba(255,255,255,0.65);
        }
        .blog-body ul li::before {
          content: '·';
          position: absolute;
          left: 0;
          color: #d4f179;
          font-weight: 900;
        }
        .blog-body ol { margin-bottom: 20px; padding-left: 24px; }
        .blog-body ol li { margin-bottom: 10px; color: rgba(255,255,255,0.65); }

        /* Short answer block */
        .blog-body .short-answer {
          background: rgba(212,241,121,0.08);
          border-left: 3px solid #d4f179;
          padding: 20px 24px;
          margin: 28px 0;
          border-radius: 0;
        }
        .blog-body .short-answer p { margin: 0; color: rgba(255,255,255,0.8); }

        /* Key takeaways */
        .blog-body .key-takeaways {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(212,241,121,0.15);
          padding: 28px 32px;
          margin: 32px 0;
        }
        .blog-body .key-takeaways h3 {
          color: #d4f179;
          margin-top: 0;
          margin-bottom: 16px;
          font-size: 13px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        /* Comparison table */
        .blog-body .comparison-table-wrap {
          overflow-x: auto;
          margin: 36px 0;
        }
        .blog-body table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }
        .blog-body table th {
          background: rgba(212,241,121,0.12);
          color: #d4f179;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid rgba(212,241,121,0.2);
        }
        .blog-body table td {
          padding: 12px 16px;
          color: rgba(255,255,255,0.7);
          border-bottom: 1px solid rgba(212,241,121,0.07);
          vertical-align: top;
        }
        .blog-body table tr:last-child td { border-bottom: none; }

        /* Mid-article CTA */
        .blog-body .article-cta-mid {
          background: #d4f179;
          padding: 28px 36px;
          margin: 48px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .blog-body .article-cta-mid p {
          margin: 0;
          font-size: 17px;
          font-weight: 800;
          color: #000042;
        }
        .blog-body .article-cta-mid a {
          background: #000042;
          color: #d4f179;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 12px 22px;
          text-decoration: none;
          flex-shrink: 0;
          display: inline-block;
        }
        .blog-body .article-cta-mid a:hover { opacity: 0.9; }

        /* FAQ */
        .blog-body .article-faq { margin-top: 56px; }
        .blog-body .article-faq h2 { margin-top: 0; }
        .blog-body .faq-item { border-top: 1px solid rgba(212,241,121,0.1); padding: 20px 0; }
        .blog-body .faq-item:last-child { border-bottom: 1px solid rgba(212,241,121,0.1); }
        .blog-body .faq-item h3 { color: #fff; margin-top: 0; margin-bottom: 10px; font-size: 16px; }

        /* Named example */
        .blog-body .named-example {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(212,241,121,0.12);
          padding: 28px 32px;
          margin: 36px 0;
        }
        .blog-body .named-example .example-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #d4f179;
          margin-bottom: 12px;
        }

        @media (max-width: 640px) {
          .blog-body .article-cta-mid { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
      <div
        className="blog-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}
