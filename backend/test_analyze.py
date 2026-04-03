import sys
import os
import asyncio

sys.path.append(os.path.dirname(os.path.abspath(__file__)))
from app.routes.analyze import analyze_code, CodeAnalysisRequest

async def test():
    req = CodeAnalysisRequest(code="def binary_search(arr, target):\n    pass", language="python")
    try:
        res = await analyze_code(req)
        print("Success:", res)
    except Exception as e:
        import traceback
        with open("traceback.log", "w") as f:
            f.write(f"Failed: {e}\n")
            traceback.print_exc(file=f)

asyncio.run(test())
