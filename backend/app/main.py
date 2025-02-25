from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import profile  # Importing profile router (add more as needed)

# Initialize FastAPI app
app = FastAPI(
    title="Campus Connect - Backend",
    description="Backend API for Campus Connect Web Application",
    version="1.0.0",
    docs_url="/docs",          # Swagger docs endpoint
    redoc_url="/redoc"         # ReDoc endpoint
)

# CORS configuration (update origins if needed for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace "*" with specific frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(profile.router, prefix="/api", tags=["Profile Management"])

# Root endpoint (Health check)
@app.get("/", tags=["Root"])
def read_root():
    return {"message": "Campus Connect Backend is running successfully 🚀"}

# Handle 404 errors (optional customization)
@app.exception_handler(404)
async def custom_404_handler(request, exc):
    return JSONResponse(
        status_code=404,
        content={"detail": "The resource you are looking for does not exist 🚫"},
    )
