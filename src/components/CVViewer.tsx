import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CVViewer: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const cvUrl = '/cv-walid-benabbes.pdf'; // Add your CV PDF to the public folder

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <section id="cv" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Mon CV
        </h2>
        <div className="h-1 w-20 bg-blue-600 mb-10 mx-auto"></div>

        <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-4">
              <button
                onClick={() => setPageNumber(prev => Math.max(prev - 1, 1))}
                disabled={pageNumber <= 1}
                className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 disabled:opacity-50"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setPageNumber(prev => Math.min(prev + 1, numPages || 1))}
                disabled={pageNumber >= (numPages || 1)}
                className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 disabled:opacity-50"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <a
              href={cvUrl}
              download
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <Download size={20} />
              <span>Télécharger CV</span>
            </a>
          </div>

          <div className="flex justify-center">
            <Document
              file={cvUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              className="border rounded-lg overflow-hidden"
            >
              <Page
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="max-w-full"
              />
            </Document>
          </div>

          <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
            Page {pageNumber} sur {numPages}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CVViewer;