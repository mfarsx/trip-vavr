import time
import pytest
from fastapi.testclient import TestClient
from unittest.mock import patch
from app.main import app

@pytest.fixture
def client():
    return TestClient(app)

def test_response_time(client):
    mock_response = "Quick response"
    
    with patch('app.services.ai_providers.generate_with_huggingface') as mock_generate:
        mock_generate.return_value = mock_response
        
        start_time = time.time()
        response = client.post(
            "/generate",
            json={
                "prompt": "Quick test",
                "model_id": "gpt2"
            }
        )
        end_time = time.time()
        
        assert response.status_code == 200
        assert end_time - start_time < 10
        assert "X-Process-Time" in response.headers 