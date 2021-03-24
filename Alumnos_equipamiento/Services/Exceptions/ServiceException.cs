using System;

namespace Alumnos_equipamiento.Services.Exceptions
{
    public class ServiceException : Exception
    {
        private int _StatusCode { get; set; }
        public int StatusCode { get { return this._StatusCode; } }

        public ServiceException(string message, int statusCode) : base(message)
        {
            _StatusCode = statusCode;
        }
    }
}
