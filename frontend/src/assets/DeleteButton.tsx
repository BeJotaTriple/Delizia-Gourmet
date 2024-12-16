import React from 'react';

interface DeleteButtonProps {
    onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => (
    <button className="bg-red-500 text-white px-2 py-1 rounded m-1" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M3 6h18v2h-18v-2zm2 3h14v13c0 1.104-.896 2-2 2h-10c-1.104 0-2-.896-2-2v-13zm3 2v9h2v-9h-2zm4 0v9h2v-9h-2zm4 0v9h2v-9h-2zm-7-11h6v2h-6v-2z" />
        </svg>
    </button>
);

export default DeleteButton;