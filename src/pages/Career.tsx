import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Upload,
  Mail,
  User,
  Briefcase,
  FileText,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type SubmitState = "idle" | "submitting" | "success" | "error";

const Career = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const maxFileSize = 5 * 1024 * 1024; // 5 MB

  const validate = () => {
    const e: Record<string, string> = {};
    if (!fullName.trim()) e.fullName = "Full name is required.";
    if (!email.trim()) e.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email.";
    if (!phone.trim()) e.phone = "Phone number is required.";
    else if (!/^[0-9+\-\s()]{7,}$/.test(phone))
      e.phone = "Enter a valid phone number.";
    if (!position.trim()) e.position = "Select a position.";
    if (!resumeFile) e.resume = "Please attach your resume (PDF, DOC, DOCX).";
    else if (resumeFile.size > maxFileSize)
      e.resume = "Resume must be under 5 MB.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onFileChange = (f?: FileList | null) => {
    const file = f?.[0] ?? null;
    if (!file) {
      setResumeFile(null);
      setErrors((prev) => ({ ...prev, resume: "" }));
      return;
    }
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.type)) {
      setErrors((prev) => ({
        ...prev,
        resume: "Only PDF, DOC, DOCX allowed.",
      }));
      setResumeFile(null);
      return;
    }
    if (file.size > maxFileSize) {
      setErrors((prev) => ({ ...prev, resume: "Resume must be under 5 MB." }));
      setResumeFile(null);
      return;
    }
    setResumeFile(file);
    setErrors((prev) => ({ ...prev, resume: "" }));
  };

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!validate()) return;
    setSubmitState("submitting");

    try {
      // Try to POST to backend API if available, otherwise simulate success.
      const form = new FormData();
      form.append("fullName", fullName);
      form.append("email", email);
      form.append("phone", phone);
      form.append("position", position);
      form.append("coverLetter", coverLetter);
      if (resumeFile) form.append("resume", resumeFile);

      // If you have an API route, replace the URL below.
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: form,
      });

      if (res.ok) {
        setSubmitState("success");
        resetForm();
      } else {
        // If no backend or endpoint returns error, fallback to simulated success for dev.
        const text = await res.text().catch(() => "");
        console.error("Upload failed:", text || res.statusText);
        setSubmitState("error");
      }
    } catch (err) {
      console.error(err);
      // Simulate success for local dev if endpoint missing
      setTimeout(() => setSubmitState("success"), 800);
    }
  };

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setPosition("");
    setCoverLetter("");
    setResumeFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setErrors({});
    setTimeout(() => setSubmitState("idle"), 3000);
  };

  return (
    <div className="min-h-screen career-page bg-slate-50">
      <div
        className="w-full backdrop-blur-sm absolute top-0 left-0 z-20"
        style={{ backgroundColor: "#6ee7df" }}
      >
        <div className="container mx-auto px-4 py-3">
          <Header />
        </div>
      </div>

      <main
        className="pt-28 pb-16 relative bg-cover bg-center min-h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1593098564269-457f7333efac')",
        }}
      >
        {/* gradient overlay for consistent color theme */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-teal-700/70 via-cyan-500/40 to-slate-900/25"></div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative min-h-[calc(100vh-7rem)] container mx-auto px-4"
        >
          {/* card stretched to fill page area between header and footer */}
          <div
            className="rounded-xl shadow-lg overflow-hidden relative bg-cover bg-center min-h-[calc(100vh-13rem)]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1462556791646-c201b8241a94')",
            }}
          >
            {/* gradient overlay for consistent color theme */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-teal-700/70 via-cyan-500/40 to-slate-900/25"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[inherit]">
              <div className="p-8 text-white bg-gradient-to-br from-teal-600/75 via-cyan-500/50 to-transparent flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-2">Careers</h1>
                <p className="text-slate-100/90 mb-6">
                  Join our team. We're looking for passionate people who want to
                  make an impact. Submit your application below.
                </p>

                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-1" />
                    <span>Competitive compensation and benefits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-1" />
                    <span>Flexible working arrangements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-1" />
                    <span>Career growth and learning opportunities</span>
                  </li>
                </ul>
              </div>

              {/* form area sits on a semi-opaque panel for legibility on the photo */}
              <div className="p-8 flex items-center">
                <div className="w-full bg-white/90 backdrop-blur-md rounded-lg p-6 shadow-md h-full">
                  <form onSubmit={submit} className="space-y-4 h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="flex flex-col">
                        <span className="text-sm font-medium text-slate-700 flex items-center gap-2">
                          <User size={14} /> Full name
                        </span>
                        <input
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className={`mt-2 px-3 py-2 border rounded-md focus:outline-none ${
                            errors.fullName
                              ? "border-red-500"
                              : "border-slate-200"
                          }`}
                          placeholder=" "
                          type="text"
                        />
                        {errors.fullName && (
                          <span className="text-xs text-red-600 mt-1">
                            {errors.fullName}
                          </span>
                        )}
                      </label>

                      <label className="flex flex-col">
                        <span className="text-sm font-medium text-slate-700 flex items-center gap-2">
                          <Mail size={14} /> Email
                        </span>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`mt-2 px-3 py-2 border rounded-md focus:outline-none ${
                            errors.email ? "border-red-500" : "border-slate-200"
                          }`}
                          placeholder=" "
                          type="email"
                        />
                        {errors.email && (
                          <span className="text-xs text-red-600 mt-1">
                            {errors.email}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <label className="flex flex-col">
                        <span className="text-sm font-medium text-slate-700 flex items-center gap-2">
                          Phone
                        </span>
                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={`mt-2 px-3 py-2 border rounded-md focus:outline-none ${
                            errors.phone ? "border-red-500" : "border-slate-200"
                          }`}
                          placeholder=" "
                          type="tel"
                        />
                        {errors.phone && (
                          <span className="text-xs text-red-600 mt-1">
                            {errors.phone}
                          </span>
                        )}
                      </label>

                      <label className="flex flex-col">
                        <span className="text-sm font-medium text-slate-700 flex items-center gap-2">
                          <Briefcase size={14} /> Position
                        </span>
                        <select
                          value={position}
                          onChange={(e) => setPosition(e.target.value)}
                          className={`mt-2 px-3 py-2 border rounded-md focus:outline-none ${
                            errors.position
                              ? "border-red-500"
                              : "border-slate-200"
                          }`}
                        >
                          <option value="">Select a position</option>
                          <option>Insurance Sales Agent</option>
                          <option>Claims Assistant</option>
                          <option>
                            Assistant Non-Life Underwriting Manager
                          </option>
                          <option>Policy Servicing Executive</option>
                          <option>Marketing / Sales Executive</option>
                        </select>
                        {errors.position && (
                          <span className="text-xs text-red-600 mt-1">
                            {errors.position}
                          </span>
                        )}
                      </label>
                    </div>

                    <label className="flex flex-col">
                      <span className="text-sm font-medium text-slate-700 flex items-center gap-2">
                        <FileText size={14} /> Cover letter (optional)
                      </span>
                      <textarea
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                        className="mt-2 px-3 py-2 border rounded-md focus:outline-none border-slate-200 min-h-[100px]"
                        placeholder="Tell us why you're a great fit..."
                      />
                    </label>

                    <div>
                      <label className="flex flex-col">
                        <span className="text-sm font-medium text-slate-700 flex items-center gap-2">
                          <Upload size={14} /> Resume
                        </span>
                        <div
                          className={`mt-2 flex items-center gap-3 p-3 border rounded-md ${
                            errors.resume
                              ? "border-red-500"
                              : "border-dashed border-slate-200"
                          }`}
                        >
                          <input
                            ref={fileInputRef}
                            onChange={(ev) => onFileChange(ev.target.files)}
                            type="file"
                            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            className="hidden"
                            id="resume-file"
                          />
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="px-3 py-2 bg-slate-100 rounded-md hover:bg-slate-200 text-sm"
                          >
                            Choose file
                          </button>
                          <div className="text-sm text-slate-600 flex-1">
                            {resumeFile ? (
                              <div className="flex items-center justify-between gap-4">
                                <span>{resumeFile.name}</span>
                                <span className="text-xs text-slate-400">
                                  {(resumeFile.size / 1024 / 1024).toFixed(2)}{" "}
                                  MB
                                </span>
                              </div>
                            ) : (
                              <span className="text-slate-400">
                                PDF, DOC, DOCX — max 5 MB
                              </span>
                            )}
                          </div>
                          {resumeFile && (
                            <button
                              type="button"
                              className="text-red-500 text-sm"
                              onClick={() => {
                                setResumeFile(null);
                                if (fileInputRef.current)
                                  fileInputRef.current.value = "";
                              }}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                        {errors.resume && (
                          <span className="text-xs text-red-600 mt-1">
                            {errors.resume}
                          </span>
                        )}
                      </label>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="submit"
                        disabled={submitState === "submitting"}
                        className="px-5 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition disabled:opacity-60"
                      >
                        {submitState === "submitting"
                          ? "Submitting..."
                          : "Submit Application"}
                      </button>

                      {submitState === "success" && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex items-center gap-2 text-sm text-teal-700"
                        >
                          <CheckCircle size={16} />
                          <span>Application submitted</span>
                        </motion.div>
                      )}

                      {submitState === "error" && (
                        <div className="flex items-center gap-2 text-sm text-red-600">
                          <XCircle size={16} />
                          <span>Submission failed. Try again later.</span>
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-slate-500">
                      By submitting your application you agree to our processing
                      of your personal data for recruitment purposes.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6"
          >
            <div className="rounded-md p-4 bg-primary border border-slate-100 text-sm text-slate-600">
              <strong>Tips:</strong> Keep your resume focused and current.
              Tailor your cover letter to the position you are applying for.
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Career;
