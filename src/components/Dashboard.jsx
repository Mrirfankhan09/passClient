import React, { useEffect } from "react";
import { KeyRound, AlertTriangle, RefreshCw, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PasswordContext } from "../context/Passwordcontext";
import { checkPasswordStrength } from "../utils/passwordstrength";
import { AppContext } from "../context/Appcontext";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
const Dashboard = () => {
  const { passwords } = useContext(PasswordContext)
  const { activities, time } = useContext(AppContext)
  const [weakpass, setWeakpass] = React.useState(0);
  const [reused, setReused] = React.useState(0);
  console.log(activities, 'activities in dashboard');

  const timeAgo = dayjs(time).fromNow();
  

  function countWeakPasswords() {
    let count = 0;
    passwords.forEach(pwd => {
      let score = checkPasswordStrength(pwd.password).score;
      if (score < 2) ++count;
      count += 1;
    });
    setWeakpass(count);
  }

  function reusedCount() {
    let passwordMap = {};

    // Step 1: Count how many times each password appears
    passwords.forEach(pwd => {
      passwordMap[pwd.password] = (passwordMap[pwd.password] || 0) + 1;
    });

    // Step 2: Count how many are reused (appear > 1 time)
    let reused = 0;
    for (let pass in passwordMap) {
      if (passwordMap[pass] > 1) {
        reused++;
      }
    }

    setReused(reused);
  }

  useEffect(() => {
    countWeakPasswords();
    reusedCount();
  }, [passwords])


  return (
    <div className="dashboard p-6 space-y-8">

      {/* Stats Section */}
      <div className="stats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Passwords */}
        <div className="stat-item bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition">
          <div className="icon bg-indigo-100 text-indigo-600 p-3 rounded-xl">
            <KeyRound size={24} />
          </div>
          <div className="details">
            <div className="number text-2xl font-bold">{passwords.length}</div>
            <div className="label text-gray-500">Passwords</div>
          </div>
        </div>

        {/* Weak Passwords */}
        <div className="stat-item bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition">
          <div className="icon bg-red-100 text-red-600 p-3 rounded-xl">
            <AlertTriangle size={24} />
          </div>
          <div className="details">
            <div className="number text-2xl font-bold">{weakpass}</div>
            <div className="label text-gray-500">Weak Passwords</div>
          </div>
        </div>

        {/* Reused Passwords */}
        <div className="stat-item bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition">
          <div className="icon bg-yellow-100 text-yellow-600 p-3 rounded-xl">
            <RefreshCw size={24} />
          </div>
          <div className="details">
            <div className="number text-2xl font-bold">{reused}</div>
            <div className="label text-gray-500">Reused Passwords</div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="stat-item bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 hover:shadow-lg transition">
          <div className="icon bg-green-100 text-green-600 p-3 rounded-xl">
            <Clock size={24} />
          </div>
          <div className="details">
            <div className="number text-2xl font-bold">{timeAgo}</div>
            <div className="label text-gray-500">Last Updated</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="recent-activity bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-3 text-gray-600">
          {
            activities.map((act) => {
              return (
                <li className="activity-item" key={act._id}> {act.action === 'added' ? '✅' : act.action === 'updated' ? '🔒' : '🗑️'} {act.action} {act.target}</li>
              )
            })
          }
          {/* <li className="activity-item">✅ Added new password for Gmail</li>
          <li className="activity-item">🔒 Updated password for Facebook</li>
          <li className="activity-item">🗑️ Deleted password for Old Account</li> */}
        </ul>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="actions grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="action-btn bg-indigo-600 text-white py-3 rounded-xl font-medium shadow hover:bg-indigo-700 transition">
            <Link
              to="/addpassword"
              className="action-btn bg-indigo-600 text-white py-3 rounded-xl font-medium shadow hover:bg-indigo-700 transition flex items-center justify-center"
            >
              + Add Password
            </Link>
          </button>
          <button className="action-btn bg-purple-600 text-white py-3 rounded-xl font-medium shadow hover:bg-purple-700 transition">
            📝 Add Secure Note
          </button>
          <button className="action-btn bg-gray-800 text-white py-3 rounded-xl font-medium shadow hover:bg-black transition">
            🔐 Security Checkup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
