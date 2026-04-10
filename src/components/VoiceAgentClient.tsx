"use client";

import React from "react";

interface VoiceAgentClientProps {
  apiKey?: string;
  isVoiceMode?: boolean;
  [key: string]: any;
}

// Voice agent disabled in this build - requires Deepgram API key
export default function VoiceAgentClient({ isVoiceMode }: VoiceAgentClientProps) {
  if (!isVoiceMode) return null;
  return (
    <div className="flex items-center justify-center p-4 text-white/40 text-xs">
      Voice mode coming soon
    </div>
  );
}
