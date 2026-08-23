import React, { useState } from 'react';

export default function ZenCodeLab() {
  const [activeSnippetIndex, setActiveSnippetIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [simulatedRun, setSimulatedRun] = useState(null);

  const snippets = [
    {
      title: "FastAPI RBAC & Multi-Role Security",
      project: "Sonarhaat Marketplace",
      lang: "Python / FastAPI",
      filename: "services/rbac_guard.py",
      description: "Custom dependency injection middleware enforcing granular access for Jewellery Sellers, BIS Officers & Hallmarking labs.",
      code: `@router.post("/hallmark/verify", dependencies=[Depends(RequireRole(["BIS_OFFICER", "HALLMARK_CENTER"]))])
async def verify_hallmark_batch(
    payload: HallmarkVerificationRequest,
    current_user: User = Depends(get_current_active_user),
    db: AsyncSession = Depends(get_db_session)
):
    """Processes digital certification & triggers verified status webhook"""
    logger.info(f"Initiating verification for batch {payload.batch_uid} by {current_user.email}")
    
    result = await HallmarkService.verify_and_stamp(
        session=db, 
        request=payload, 
        officer_id=current_user.id
    )
    
    await EventBus.publish("hallmark.certified", {
        "batch_uid": payload.batch_uid,
        "certificate_id": result.certificate_id,
        "certified_at": result.timestamp
    })
    
    return {"status": "SUCCESS", "certificate_uid": result.certificate_id}`,
      output: `[INFO] Initialized RBAC Guard: Role 'BIS_OFFICER' authenticated\n[PASS] Verified cryptographic signature for Batch #BIS-9921\n[EVENT] Dispatched webhook 'hallmark.certified' -> Status 200 OK`
    },
    {
      title: "Prisma & PostgreSQL Transactions",
      project: "BoddhIQ Learning Platform",
      lang: "TypeScript / Prisma",
      filename: "controllers/hackathonController.ts",
      description: "Atomic database transactions synchronizing submissions, activity logs, and real-time student leaderboard updates.",
      code: `export async function submitHackathonEntry(req: AuthenticatedRequest, res: Response) {
  const { hackathonId, repositoryUrl, liveDemoUrl, teamMemberIds } = req.body;
  
  try {
    const submission = await prisma.$transaction(async (tx) => {
      // 1. Create Hackathon Submission record
      const entry = await tx.submission.create({
        data: { hackathonId, repositoryUrl, liveDemoUrl, submittedById: req.user.id }
      });
      
      // 2. Log activity stream for community feed
      await tx.activityLog.create({
        data: { action: 'HACKATHON_SUBMISSION', entityId: entry.id, userId: req.user.id }
      });
      
      // 3. Emit real-time WebSocket event
      await broadcastToMentors(hackathonId, { type: 'NEW_SUBMISSION', entryId: entry.id });
      
      return entry;
    });

    return res.status(201).json({ success: true, submissionId: submission.id });
  } catch (error) {
    return res.status(500).json({ error: "Transaction rolled back safely." });
  }
}`,
      output: `[TX_START] Initiated Prisma ACID transaction $tx\n[DB_COMMIT] Created Submission #sub_88301\n[BROADCAST] Emitted WebSocket message to 12 active mentors`
    },
    {
      title: "Multi-Tenant Dynamic Domain Router",
      project: "Conference Management CMS",
      lang: "Next.js / Edge",
      filename: "middleware.ts",
      description: "Edge middleware dynamically resolving custom university DNS hostnames without page reloads.",
      code: `import { NextRequest, NextResponse } from "next/server";
import { getConferenceByHostname } from "@/lib/tenant-resolver";

export const config = {
  matcher: ["/((?!api/|_next/|_static/|[\\\\w-]+\\\\.\\\\w+).*)"],
};

export async function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  const currentHost = hostname.replace(\`.\${process.env.NEXT_PUBLIC_ROOT_DOMAIN}\`, "");
  
  // Resolve custom domain or tenant slug from edge cache
  const conference = await getConferenceByHostname(hostname, currentHost);
  
  if (conference) {
    // Rewrite path to dynamic conference template tenant directory
    return NextResponse.rewrite(
      new URL(\`/_sites/\${conference.slug}\${req.nextUrl.pathname}\`, req.url)
    );
  }
  
  return NextResponse.next();
}`,
      output: `[EDGE_RESOLVE] Hostname 'icse-2026.edu' matched Tenant 'icse-intl-conf'\n[REWRITE] Rewrote internal path to /_sites/icse-intl-conf/\n[LATENCY] Edge resolve latency: 4.2ms`
    }
  ];

  const current = snippets[activeSnippetIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunSimulation = () => {
    setSimulatedRun(current.output);
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8 reveal">
      
      {/* File Explorer / Sidebar */}
      <div className="lg:col-span-4 space-y-4">
        {snippets.map((snippet, idx) => {
          const isActive = activeSnippetIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => {
                setActiveSnippetIndex(idx);
                setSimulatedRun(null);
              }}
              className={`w-full text-left sketch-border p-5 magnetic transition-all ${
                isActive
                  ? 'bg-[var(--mustard)] shadow-[4px_4px_0_var(--ink)] -translate-y-1'
                  : 'bg-[var(--paper)] hover:bg-[var(--cream)] hover:-translate-y-0.5'
              }`}
              data-cursor="hover"
            >
              <div className="font-hand text-lg text-[var(--coral)] mb-1">{snippet.lang}</div>
              <h3 className="font-display text-xl mb-2">{snippet.title}</h3>
              <p className="font-sans text-xs opacity-80 leading-relaxed line-clamp-2">
                {snippet.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Code Editor Window */}
      <div className="lg:col-span-8">
        <div className="sketch-border-thick bg-[var(--ink)] text-[var(--paper)] overflow-hidden h-full flex flex-col">
          
          {/* Editor Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[var(--ink-soft)] border-b-2 border-black">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--coral)]"></div>
              <div className="w-3 h-3 rounded-full bg-[var(--mustard)]"></div>
              <div className="w-3 h-3 rounded-full bg-[var(--teal)]"></div>
              <span className="ml-3 font-sans text-xs opacity-70">{current.filename}</span>
            </div>
            <button onClick={handleCopy} className="text-xs font-bold bg-[var(--paper)] text-[var(--ink)] px-2 py-1 rounded hover:bg-[var(--mustard)] transition-colors magnetic" data-cursor="hover">
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          {/* Editor Content */}
          <div className="p-6 overflow-auto text-sm font-mono leading-relaxed text-[var(--cream)] flex-grow" style={{tabSize: 4}}>
            <pre className="whitespace-pre-wrap break-words">
              <code>{current.code}</code>
            </pre>
          </div>

          {/* Editor Footer / Run Simulation */}
          <div className="p-4 border-t-2 border-dashed border-[var(--ink-soft)] bg-[#111]">
            {!simulatedRun ? (
              <button onClick={handleRunSimulation} className="btn-primary py-2 px-4 text-sm magnetic" style={{background: 'var(--teal)', borderColor: 'var(--teal)'}} data-cursor="hover">
                <i className="fas fa-play mr-2"></i> Run Simulation
              </button>
            ) : (
              <div className="font-mono text-xs text-[var(--teal)] whitespace-pre-wrap">
                {simulatedRun}
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
