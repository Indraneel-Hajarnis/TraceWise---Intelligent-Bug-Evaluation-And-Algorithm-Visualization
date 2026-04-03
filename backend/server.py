#!/usr/bin/env python3
"""
Simple server entry point for TraceWise backend
Run this file directly to start the server
"""

import sys
import os

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)

