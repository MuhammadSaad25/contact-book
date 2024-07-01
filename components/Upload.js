'use client'
import React from 'react'
import { CldUploadButton } from 'next-cloudinary'

function Upload() {
  return (
    <div>
      <CldUploadButton signatureEndpoint="/api/sign-image" />
    </div>
  )
}

export default Upload
