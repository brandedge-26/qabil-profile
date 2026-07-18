import { renderToBuffer } from '@react-pdf/renderer';
import { NextResponse } from 'next/server';
import { createElement } from 'react';
import QabilPdfDocument from './document';

export async function GET() {
  try {
    const buffer = await renderToBuffer(createElement(QabilPdfDocument));
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Qabil-Company-Profile.pdf"',
      },
    });
  } catch (err) {
    console.error('PDF error:', err);
    return new NextResponse(String(err), { status: 500 });
  }
}
