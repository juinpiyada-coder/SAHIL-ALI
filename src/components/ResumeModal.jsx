import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle, Mail, Phone, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden flex flex-col animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 sm:px-8 py-4 border-b border-black/10 flex items-center justify-between bg-[#F8F7F2]">
          <div className="flex items-center gap-3">
            <div className="hanko-seal">履</div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-[#1C1B19]">
                SK SAHIL ALI &bull; Curriculum Vitae
              </h3>
              <p className="text-xs text-[#5E725F] font-mono">
                Sk_Sahil_Ali.pdf &bull; Verified &amp; Shipped
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Sk_Sahil_Ali.pdf"
              download="SK_Sahil_Ali_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#1C1B19] text-white hover:bg-[#33312D] shadow-sm transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/5 text-[#58544D] hover:text-[#1C1B19] transition-colors"
              aria-label="Close Resume Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Content: Split Grid with PDF Viewer & Quick Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full overflow-hidden">
          
          {/* Left Column: Quick Profile & Credentials Summary (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 overflow-y-auto bg-[#FBFBF9] border-r border-black/10 space-y-6">
            
            {/* Candidate Header */}
            <div>
              <span className="text-[11px] font-mono text-[#B8764B] font-bold uppercase tracking-wider block mb-1">
                SOFTWARE DEVELOPER
              </span>
              <h4 className="text-2xl font-bold font-serif-title text-[#1C1B19]">
                SK Sahil Ali
              </h4>
              <p className="text-xs text-[#58544D] font-sans-clean mt-1">
                Kolkata, India &bull; Full-Stack &amp; Systems Engineer
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-2 text-xs font-mono text-[#58544D]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B8764B]" />
                <a href="mailto:sksahil.006297@snuindia.in" className="hover:underline text-[#1C1B19]">
                  sksahil.006297@snuindia.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#5E725F]" />
                <span>+91 62903 02422</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8E8980]" />
                <span>Kolkata, West Bengal</span>
              </div>
            </div>

            {/* Experience Snapshot */}
            <div className="space-y-3 pt-4 border-t border-black/5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1C1B19]">
                <Briefcase className="w-3.5 h-3.5 text-[#B8764B]" />
                <span>EXPERIENCE (2025 - 2026)</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-black/5 shadow-2xs">
                <p className="text-xs font-bold text-[#1C1B19]">Deep Duo Foundation</p>
                <p className="text-[11px] text-[#5E725F]">Software Developer</p>
                <p className="text-[11px] text-[#58544D] mt-1 leading-relaxed">
                  Sonarhaat Marketplace, BoddhIQ Learning Platform, Paper Submission Systems, RBAC security &amp; APIs.
                </p>
              </div>
            </div>

            {/* Education Snapshot */}
            <div className="space-y-3 pt-2 border-t border-black/5">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1C1B19]">
                <GraduationCap className="w-3.5 h-3.5 text-[#5E725F]" />
                <span>EDUCATION (2025)</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-black/5 shadow-2xs">
                <p className="text-xs font-bold text-[#1C1B19]">Sister Nivedita University</p>
                <p className="text-[11px] text-[#5E725F]">B.Tech in Computer Science &amp; Engineering</p>
                <p className="text-[11px] font-mono text-[#B8764B] mt-0.5">GPA: 7.82</p>
              </div>
            </div>

            {/* Core Skills Snapshot */}
            <div className="space-y-2 pt-2 border-t border-black/5">
              <span className="text-[11px] font-mono font-bold text-[#1C1B19] block">
                TECHNICAL SKILLS
              </span>
              <p className="text-xs text-[#58544D] leading-relaxed">
                JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, FastAPI, Flutter, MongoDB, PostgreSQL, Prisma, REST APIs, JWT, Tailwind CSS, Cloudinary, Git/GitHub
              </p>
            </div>

          </div>

          {/* Right Column: Embedded PDF Viewer (7 cols) */}
          <div className="lg:col-span-7 h-[65vh] lg:h-auto bg-[#EFECE4] flex flex-col">
            <iframe
              src="/Sk_Sahil_Ali.pdf#toolbar=0&navpanes=0"
              title="SK Sahil Ali Resume PDF"
              className="w-full h-full border-none"
            />
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-3 border-t border-black/10 flex items-center justify-between bg-[#F8F7F2] text-xs font-mono text-[#8E8980]">
          <span>Authentic Document from Local Workspace</span>
          <a
            href="/Sk_Sahil_Ali.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[#1C1B19] hover:underline"
          >
            <span>Open in New Tab</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
}
