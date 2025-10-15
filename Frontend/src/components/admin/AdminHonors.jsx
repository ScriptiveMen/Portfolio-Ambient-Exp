import React, { useEffect, useState } from "react";
import {
    Plus,
    Edit2,
    Trash2,
    X,
    Award,
    Trophy,
    CloudLightning,
} from "lucide-react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import {
    addhonor,
    updateHonor,
    deleteHonor,
} from "../../store/slices/HonorSlice";

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    };
    const resetForm = () => {
        setValues(initialValues);
    };
    const setFormValues = (newValues) => {
        setValues(newValues);
    };
    return { values, handleChange, resetForm, setFormValues };
};

const AdminHonors = () => {
    const dispatch = useDispatch();

    const { honors } = useSelector((state) => state.honors);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [deleting, setDeleting] = useState(null);

    useEffect(() => {
        async function getHonors() {
            try {
                setLoading(true);
                const res = await axios.get(
                    "http://localhost:3000/api/admin/honors",
                    { withCredentials: true }
                );

                dispatch(addhonor(res.data.honors));
            } catch (error) {
                console.error("Error fetching honors:", error);
                dispatch(addhonor([]));
            } finally {
                setLoading(false);
            }
        }
        getHonors();
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingHonor, setEditingHonor] = useState(null);

    const {
        values: formData,
        handleChange,
        resetForm,
        setFormValues,
    } = useForm({
        title: "",
        position: "",
        year: "",
    });

    const openModal = (honor = null) => {
        if (honor) {
            setEditingHonor(honor);
            setFormValues(honor);
        } else {
            setEditingHonor(null);
            resetForm();
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingHonor(null);
        resetForm();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setSubmitting(true);

            if (editingHonor) {
                // Update existing honor
                const res = await axios.patch(
                    `http://localhost:3000/api/admin/honors/${editingHonor._id}`,
                    {
                        title: formData.title,
                        position: formData.position,
                        year: formData.year,
                    },
                    { withCredentials: true }
                );
                dispatch(updateHonor(res.data.newHonor));
            } else {
                // Create new honor

                const res = await axios.post(
                    "http://localhost:3000/api/admin/honors",
                    formData,
                    { withCredentials: true }
                );

                const newHonor = res.data.honor;
                dispatch(addhonor([...honors, newHonor]));
            }

            closeModal();
        } catch (error) {
            console.error("Error submitting honor:", error);
            alert("Failed to save honor. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this honor?")) {
            return;
        }

        try {
            setDeleting(id);
            await axios.delete(`http://localhost:3000/api/admin/honors/${id}`, {
                withCredentials: true,
            });

            console.log(id);

            dispatch(deleteHonor(id));
        } catch (error) {
            console.error("Error deleting honor:", error);
            alert("Failed to delete honor. Please try again.");
        } finally {
            setDeleting(null);
        }
    };

    // Show loading spinner while fetching data
    if (loading) {
        return (
            <div className="w-full min-h-screen bg-[#1a1a1a] flex items-center justify-center">
                <LoadingSpinner size="lg" text="Loading honors..." />
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-[#1a1a1a] p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-2">
                            Manage Honors & Awards
                        </h1>
                        <p className="text-gray-400">
                            Showcase your achievements and recognition
                        </p>
                    </div>
                    <button
                        onClick={() => openModal()}
                        className="flex items-center gap-2 px-6 py-3 bg-[#EF6A93] rounded-lg hover:bg-[#EF6A93]/80 transition-colors text-white font-medium"
                    >
                        <Plus size={20} />
                        Add New Honor
                    </button>
                </div>

                {/* Show honors grid only if honors exist */}
                {honors && honors.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {honors.map((honor) => (
                            <div
                                key={honor._id}
                                className="group relative bg-[#252525] rounded-lg p-6 hover:bg-[#2a2a2a] transition-all duration-300 border border-[#3a3a3a] hover:border-[#EF6A93]/30"
                            >
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="w-14 h-14 rounded-full bg-[#EF6A93]/10 flex items-center justify-center">
                                        <Trophy className="w-7 h-7 text-[#EF6A93]" />
                                    </div>
                                    <span className="px-3 py-1 bg-[#EF6A93]/20 text-[#EF6A93] rounded-full text-sm font-medium">
                                        {honor.year}
                                    </span>
                                </div>

                                <div className="mb-4">
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {honor.title}
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <Award
                                            size={16}
                                            className="text-gray-400"
                                        />
                                        <p className="text-gray-400 text-sm">
                                            {honor.position}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-2 pt-4 border-t border-[#3a3a3a]">
                                    <button
                                        onClick={() => openModal(honor)}
                                        disabled={deleting === honor._id}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#3a3a3a] text-gray-300 rounded-lg hover:bg-[#404040] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Edit2 size={16} />
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(honor._id)}
                                        disabled={deleting === honor.id}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {deleting === honor._id ? (
                                            <>
                                                <LoadingSpinner
                                                    size="sm"
                                                    color="#f87171"
                                                />
                                                <span>Deleting...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Trash2 size={16} />
                                                Delete
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Empty state - show only when no honors
                    <div className="text-center py-20">
                        <div className="w-20 h-20 mx-auto mb-4 bg-[#252525] rounded-full flex items-center justify-center">
                            <Trophy size={40} className="text-gray-500" />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-2">
                            No honors yet
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Start by adding your first achievement
                        </p>
                        <button
                            onClick={() => openModal()}
                            className="px-6 py-3 bg-[#EF6A93] rounded-lg hover:bg-[#EF6A93]/80 transition-colors text-white font-medium"
                        >
                            Add Honor
                        </button>
                    </div>
                )}

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                        <div className="bg-[#1f1f1f] rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                            <div className="sticky top-0 bg-[#1f1f1f] border-b border-[#2a2a2a] p-6 flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-white">
                                    {editingHonor
                                        ? "Edit Honor"
                                        : "Add New Honor"}
                                </h2>
                                <button
                                    onClick={closeModal}
                                    disabled={submitting}
                                    className="p-2 hover:bg-[#2a2a2a] rounded-lg transition-colors disabled:opacity-50"
                                >
                                    <X size={24} className="text-gray-400" />
                                </button>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="p-6 space-y-6"
                            >
                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">
                                        Award/Honor Title *
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                        disabled={submitting}
                                        className="w-full px-4 py-3 bg-[#252525] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#EF6A93] transition-colors disabled:opacity-50"
                                        placeholder="e.g., Smart India Hackathon"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">
                                        Position/Recognition *
                                    </label>
                                    <input
                                        type="text"
                                        name="position"
                                        value={formData.position}
                                        onChange={handleChange}
                                        required
                                        disabled={submitting}
                                        className="w-full px-4 py-3 bg-[#252525] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#EF6A93] transition-colors disabled:opacity-50"
                                        placeholder="e.g., Winner, Finalist, 1st Place"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">
                                        Year *
                                    </label>
                                    <input
                                        type="text"
                                        name="year"
                                        value={formData.year}
                                        onChange={handleChange}
                                        required
                                        disabled={submitting}
                                        className="w-full px-4 py-3 bg-[#252525] border border-[#3a3a3a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#EF6A93] transition-colors disabled:opacity-50"
                                        placeholder="2024"
                                    />
                                </div>

                                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                                    <p className="text-blue-400 text-sm">
                                        <span className="font-semibold">
                                            Note:
                                        </span>{" "}
                                        All fields marked with * are required.
                                        Add your most significant achievements
                                        and recognition.
                                    </p>
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        disabled={submitting}
                                        className="flex-1 px-6 py-3 bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg text-white hover:bg-[#333333] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="flex-1 px-6 py-3 bg-[#EF6A93] rounded-lg hover:bg-[#EF6A93]/80 transition-colors text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {submitting ? (
                                            <>
                                                <LoadingSpinner
                                                    size="sm"
                                                    color="white"
                                                />
                                                <span>
                                                    {editingHonor
                                                        ? "Updating..."
                                                        : "Adding..."}
                                                </span>
                                            </>
                                        ) : (
                                            <span>
                                                {editingHonor
                                                    ? "Update Honor"
                                                    : "Add Honor"}
                                            </span>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminHonors;
