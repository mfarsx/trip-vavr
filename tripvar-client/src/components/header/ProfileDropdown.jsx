import { motion } from "framer-motion";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export default function ProfileDropdown({ onLogout }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-xl shadow-lg border border-gray-700/50 overflow-hidden"
    >
      <div className="p-2">
        <button
          onClick={() => navigate("/settings")}
          className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700/50 rounded-lg flex items-center gap-2"
        >
          <FiSettings className="w-4 h-4" />
          Settings
        </button>
        <button
          onClick={onLogout}
          className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700/50 rounded-lg flex items-center gap-2"
        >
          <FiLogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </motion.div>
  );
}

ProfileDropdown.propTypes = {
  onLogout: PropTypes.func.isRequired
};
