import React from 'react';

interface VisualizeButtonProps {
    onClick: () => void;
}

const VisualizeButton: React.FC<VisualizeButtonProps> = ({ onClick }) => (
    <button className="bg-green-500 text-white px-2 py-1 rounded m-1" onClick={onClick}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.274.823-.676 1.597-1.186 2.3a11.042 11.042 0 01-1.186 1.7C16.268 16.057 12.477 19 8 19c-4.477 0-8.268-2.943-9.542-7 .274-.823.676-1.597 1.186-2.3a11.042 11.042 0 011.186-1.7z"
            />
        </svg>
    </button>
);

export default VisualizeButton;