'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/data';
import { Upload, X, Check, Sparkles, Copy, FileCheck } from 'lucide-react';

export default function ImageUploader() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [assignedProductId, setAssignedProductId] = useState<string>(PRODUCTS[0].id);
  const [isDragging, setIsDragging] = useState(false);
  const [copied, setCopied] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (JPG, PNG, WEBP)');
      return;
    }
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleSaveInstruction = () => {
    if (!selectedFile) return;
    const targetProduct = PRODUCTS.find(p => p.id === assignedProductId);
    const instructionText = `Save '${selectedFile.name}' into public/images/ and set product '${targetProduct?.name}' image path to '/images/${selectedFile.name}'`;
    navigator.clipboard.writeText(instructionText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* Floating Manager Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 px-5 py-3.5 rounded-2xl bg-[#2C1A14] hover:bg-[#1A0F0B] text-[#DAA520] font-extrabold text-xs shadow-2xl border-2 border-[#C85A17] flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        title="Upload & Manage Product Images"
      >
        <Upload className="w-4 h-4 text-[#C85A17]" />
        <span className="hidden sm:inline font-serif">Upload Product Image</span>
      </button>

      {/* Image Uploader Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden border border-[#DAA520] shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-2xl bg-[#F3ECE0] text-[#2C1A14] hover:bg-[#EFE6D5] transition-colors"
              aria-label="Close Uploader"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-[#C85A17]/10 text-[#C85A17] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#DAA520]" />
                <span>Asset Management</span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#2C1A14]">
                Upload New Product Photos
              </h3>
              <p className="text-xs text-[#3D2319]">
                Drag and drop your high-resolution product photos (bottles, jars, boxed samagri) to preview and integrate them directly into your website.
              </p>
            </div>

            {/* Drag & Drop Zone */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                isDragging
                  ? 'border-[#C85A17] bg-[#C85A17]/10 scale-102'
                  : 'border-[#E8DDCB] bg-[#FAF6EE] hover:border-[#DAA520]'
              }`}
            >
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])}
              />
              <div className="w-14 h-14 rounded-2xl bg-white text-[#C85A17] flex items-center justify-center mx-auto shadow-xs mb-3 border border-[#E8DDCB]">
                <Upload className="w-6 h-6" />
              </div>
              <p className="font-serif font-bold text-sm text-[#2C1A14]">
                {selectedFile ? selectedFile.name : 'Click to Upload or Drag & Drop Image Here'}
              </p>
              <p className="text-xs text-[#3D2319] mt-1 font-medium">
                Supports JPG, PNG, WEBP (Recommended: 800x800px or higher)
              </p>
            </div>

            {/* Preview Section */}
            {previewUrl && (
              <div className="p-4 rounded-2xl bg-[#FAF6EE] border border-[#E8DDCB] space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-[#2C1A14] flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-green-700" />
                    <span>Live Preview & Product Mapping:</span>
                  </h4>
                  {selectedFile && (
                    <span className="text-[10px] font-bold text-[#2C1A14] bg-white px-2 py-0.5 rounded-md border border-[#E8DDCB]">
                      {(selectedFile.size / 1024).toFixed(1)} KB
                    </span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <div className="relative w-36 h-36 rounded-xl overflow-hidden bg-white border border-[#E8DDCB] shrink-0 shadow-sm">
                    <Image src={previewUrl} alt="Uploaded Preview" fill className="object-cover" />
                  </div>

                  <div className="flex-1 space-y-3 w-full">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-[#2C1A14] block">
                        Assign Uploaded Image to Product:
                      </label>
                      <select
                        value={assignedProductId}
                        onChange={(e) => setAssignedProductId(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-[#E8DDCB] text-xs text-[#2C1A14] font-semibold focus:outline-none focus:ring-1 focus:ring-[#C85A17]"
                      >
                        {PRODUCTS.map((prod) => (
                          <option key={prod.id} value={prod.id}>
                            {prod.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      onClick={handleSaveInstruction}
                      className="w-full py-2.5 px-4 rounded-2xl bg-[#C85A17] hover:bg-[#B44E11] text-white font-extrabold text-xs shadow-xs transition-all flex items-center justify-center gap-2"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-[#DAA520]" />
                          <span>Image Reference Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-[#DAA520]" />
                          <span>Copy Image Reference to Clipboard</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="text-center pt-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 rounded-2xl bg-[#F3ECE0] hover:bg-[#EFE6D5] text-[#2C1A14] font-extrabold text-xs transition-colors"
              >
                Close Uploader
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
