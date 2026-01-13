'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff, MicOff, AlertTriangle, RefreshCw, CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FailureRecoveryBanner({ onResume, onRetry }) {
  const [issue, setIssue] = useState(null);
  const [isRecovering, setIsRecovering] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Simulate network monitoring
  useEffect(() => {
    const handleOffline = () => setIssue('network');
    const handleOnline = () => {
      if (issue === 'network') {
        setIsRecovering(true);
        setTimeout(() => {
          setIssue(null);
          setIsRecovering(false);
        }, 2000);
      }
    };

    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('online', handleOnline);
    };
  }, [issue]);

  const handleRecovery = () => {
    setIsRecovering(true);
    setTimeout(() => {
      setIssue(null);
      setIsRecovering(false);
      onResume?.();
    }, 2000);
  };

  const handleDismiss = () => {
    setDismissed(true);
  };

  if (dismissed || (!issue && !isRecovering)) return null;

  const issueConfig = {
    network: {
      icon: WifiOff,
      iconColor: 'text-destructive',
      bgColor: 'bg-destructive/10 border-destructive/20',
      title: 'Connection Lost',
      message: 'Your internet connection dropped. Your progress is auto-saved.',
      action: 'Retry Connection',
    },
    mic: {
      icon: MicOff,
      iconColor: 'text-warning',
      bgColor: 'bg-warning/10 border-warning/20',
      title: 'Microphone Permission Revoked',
      message: 'Please re-enable microphone access to continue recording.',
      action: 'Re-enable Mic',
    },
    browser: {
      icon: AlertTriangle,
      iconColor: 'text-warning',
      bgColor: 'bg-warning/10 border-warning/20',
      title: 'Browser Issue Detected',
      message: 'Something went wrong. Your answers are safely saved.',
      action: 'Resume Interview',
    },
    partial: {
      icon: AlertTriangle,
      iconColor: 'text-warning',
      bgColor: 'bg-warning/10 border-warning/20',
      title: 'Incomplete Submission',
      message: 'Your last answer may not have been fully recorded. You can re-record it.',
      action: 'Re-record Answer',
    },
  };

  const config = issue ? issueConfig[issue] : null;
  const Icon = config?.icon;

  return (
    <AnimatePresence>
      {config && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`fixed top-16 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md rounded-xl border ${config.bgColor} p-4 shadow-lg card-elevated`}
        >
          <div className="flex items-start gap-3">
            {isRecovering ? (
              <RefreshCw className="h-5 w-5 text-primary animate-spin mt-0.5 flex-shrink-0" />
            ) : (
              <Icon className={`h-5 w-5 ${config.iconColor} mt-0.5 flex-shrink-0`} />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h4 className="font-medium text-sm">
                  {isRecovering ? 'Recovering...' : config.title}
                </h4>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 -mr-2 -mt-1 flex-shrink-0"
                  onClick={handleDismiss}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {isRecovering ? 'Please wait while we restore your session...' : config.message}
              </p>
              {!isRecovering && (
                <div className="flex items-center gap-2 mt-3">
                  <Button size="sm" onClick={handleRecovery}>
                    <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
                    {config.action}
                  </Button>
                  <span className="text-xs text-muted-foreground">Auto-saved ✓</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
      {isRecovering && !issue && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-16 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md rounded-xl border bg-success/10 border-success/20 p-4 shadow-lg card-elevated"
        >
          <div className="flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm text-success">Connection Restored</h4>
              <p className="text-xs text-muted-foreground mt-0.5">You can continue your interview.</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Export a hook for programmatic control
export function useFailureRecovery() {
  const [showBanner, setShowBanner] = useState(false);
  const [issueType, setIssueType] = useState(null);

  const triggerIssue = (type) => {
    setIssueType(type);
    setShowBanner(true);
  };

  const clearIssue = () => {
    setIssueType(null);
    setShowBanner(false);
  };

  return { showBanner, issueType, triggerIssue, clearIssue };
}
