import React from "react";
import { Card, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";
import { RefreshCw, AlertTriangle, Lock, Clock } from "lucide-react";

export default function SecurityCheckup() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold flex items-center gap-2">
          <Lock className="w-5 h-5 text-blue-600" /> Security Checkup
        </h1>
        <Button variant="outline" className="flex items-center gap-2">
          Run Checkup <RefreshCw className="w-4 h-4" />
        </Button>
      </div>

      {/* Security Score */}
      <Card className="p-6">
        <CardContent className="flex flex-col items-center gap-4">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="absolute inset-0" viewBox="0 0 36 36">
              <path
                className="text-gray-200"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-green-500"
                strokeWidth="3"
                strokeDasharray="85, 100"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="text-2xl font-bold">85/100</span>
          </div>
          <p className="text-center text-gray-600">
            Your Security Score
            <br />
            <span className="text-sm">Based on password strength & reuse</span>
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <Clock className="w-4 h-4" /> Last Checked: a few seconds ago
          </p>
        </CardContent>
      </Card>

      {/* Weak and Reused Passwords */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-yellow-400">
          <CardContent className="p-4 space-y-2">
            <h2 className="flex items-center gap-2 text-yellow-600 font-semibold">
              <AlertTriangle className="w-4 h-4" /> Weak Passwords (2)
            </h2>
            <ul className="text-sm list-disc list-inside text-gray-700">
              <li>Netflix (too short)</li>
              <li>Instagram (common word)</li>
            </ul>
            <Button className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white">
              Fix Now
            </Button>
          </CardContent>
        </Card>

        <Card className="border-red-400">
          <CardContent className="p-4 space-y-2">
            <h2 className="flex items-center gap-2 text-red-600 font-semibold">
              <Lock className="w-4 h-4" /> Reused Passwords (1)
            </h2>
            <ul className="text-sm list-disc list-inside text-gray-700">
              <li>Gmail & Facebook</li>
            </ul>
            <Button className="mt-2 bg-red-500 hover:bg-red-600 text-white">
              Update
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardContent className="p-4 space-y-2">
          <h2 className="font-semibold text-gray-700">Recent Activity</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>✅ Added new password for GitHub (1h ago)</li>
            <li>🔄 Updated password for Gmail (1d ago)</li>
            <li>🗑️ Deleted password for Old Account (1w ago)</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
